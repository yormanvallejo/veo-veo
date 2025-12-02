import React, { useState, useEffect, useCallback } from 'react';
import { GameType, GameState } from './types';
import { LEVELS } from './constants';
import { PatternGame } from './components/PatternGame';
import { SelectionGame } from './components/SelectionGame';
import { MazeGame } from './components/MazeGame';
import { GridCopyGame } from './components/GridCopyGame';
import { Star, Lock, Play, RotateCcw, Home, PenTool, Volume2 } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    childName: '',
    currentLevelId: null,
    completedLevels: [],
    score: 0,
  });
  
  const [tempName, setTempName] = useState('');

  const currentLevel = LEVELS.find(l => l.id === gameState.currentLevelId);

  // Text-to-Speech Helper
  const speakText = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    
    // Cancel any current speaking
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES'; // Spanish
    utterance.rate = 0.9; // Slightly slower for kids
    utterance.pitch = 1.1; // Slightly higher pitch
    window.speechSynthesis.speak(utterance);
  }, []);

  // Read instructions when level changes
  useEffect(() => {
    if (currentLevel) {
        // Short delay to allow screen transition
        const timer = setTimeout(() => {
            speakText(currentLevel.instruction);
        }, 500);
        return () => clearTimeout(timer);
    }
  }, [currentLevel, speakText]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
        setGameState(prev => ({ ...prev, childName: tempName.trim() }));
        speakText(`Hola ${tempName}, ¡bienvenido a Veo Veo!`);
    }
  };

  const handleLevelSelect = (id: number) => {
    setGameState(prev => ({ ...prev, currentLevelId: id }));
  };

  const handleLevelComplete = () => {
    speakText(`¡Felicidades ${gameState.childName}, completaste el nivel!`);
    if (gameState.currentLevelId && !gameState.completedLevels.includes(gameState.currentLevelId)) {
        setGameState(prev => ({
            ...prev,
            completedLevels: [...prev.completedLevels, prev.currentLevelId!],
            score: prev.score + 100,
            currentLevelId: null // Go back to menu
        }));
    } else {
        setGameState(prev => ({ ...prev, currentLevelId: null }));
    }
  };

  const handleBack = () => {
    setGameState(prev => ({ ...prev, currentLevelId: null }));
  };

  const renderGame = () => {
    if (!currentLevel) return null;
    
    const commonProps = {
        level: currentLevel,
        onComplete: handleLevelComplete,
        onSpeak: speakText,
        childName: gameState.childName
    };

    switch (currentLevel.type) {
      case GameType.PATTERN:
        return <PatternGame {...commonProps} />;
      case GameType.SELECTION:
        return <SelectionGame {...commonProps} />;
      case GameType.MAZE:
        return <MazeGame {...commonProps} />;
      case GameType.GRID_COPY:
        return <GridCopyGame {...commonProps} />;
      default:
        return <div>Juego no implementado</div>;
    }
  };

  /* --- Welcome Screen --- */
  if (!gameState.childName) {
      return (
        <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center p-4 font-[Fredoka]">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-yellow-300 max-w-md w-full text-center">
                <h1 className="text-5xl font-bold text-pink-500 mb-6 drop-shadow-sm">¡Hola!</h1>
                <p className="text-xl text-gray-600 mb-6">¿Cómo te llamas?</p>
                <form onSubmit={handleNameSubmit} className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        placeholder="Escribe tu nombre aquí"
                        className="p-4 text-center text-2xl border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 placeholder:text-gray-300"
                        autoFocus
                    />
                    <button 
                        type="submit"
                        disabled={!tempName.trim()}
                        className="bg-green-400 text-white text-xl font-bold py-4 rounded-xl shadow-md hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Comenzar a Jugar
                    </button>
                </form>
            </div>
        </div>
      )
  }

  /* --- Main Menu --- */
  if (!gameState.currentLevelId) {
    return (
      <div className="min-h-screen bg-yellow-50 p-4 md:p-8 flex flex-col items-center font-[Fredoka]">
        <header className="mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-pink-500 drop-shadow-md mb-2">Veo, veo</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400">inicial 3</h2>
            <div className="mt-4 bg-white/50 px-6 py-2 rounded-full inline-block">
                <p className="text-xl text-sky-600 font-bold">Hola, {gameState.childName}</p>
            </div>
        </header>

        <div className="bg-white p-4 rounded-2xl shadow-sm border-2 border-yellow-200 mb-8 flex items-center gap-2">
            <Star className="text-yellow-400 fill-yellow-400" />
            <span className="text-xl font-bold text-gray-700">Puntos: {gameState.score}</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
            {LEVELS.map((level, index) => {
                const isLocked = false; 
                const isCompleted = gameState.completedLevels.includes(level.id);

                return (
                    <button
                        key={level.id}
                        disabled={isLocked}
                        onClick={() => handleLevelSelect(level.id)}
                        className={`
                            aspect-square rounded-2xl p-4 flex flex-col items-center justify-between shadow-md transition-all
                            border-b-4 
                            ${isLocked 
                                ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' 
                                : isCompleted 
                                    ? 'bg-green-100 border-green-400 text-green-700 hover:translate-y-1' 
                                    : 'bg-white border-pink-300 text-pink-500 hover:-translate-y-1 hover:shadow-lg'
                            }
                        `}
                    >
                        <div className="text-3xl font-bold">{level.id}</div>
                        <div className="flex-1 flex items-center justify-center">
                            {isLocked ? <Lock size={32} /> : (
                                isCompleted ? <Star size={40} className="fill-green-500" /> : <Play size={40} className="fill-pink-200" />
                            )}
                        </div>
                        <div className="text-sm font-semibold text-center leading-tight">{level.title}</div>
                    </button>
                )
            })}
        </div>
      </div>
    );
  }

  /* --- Game View --- */
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col font-[Fredoka]">
        <nav className="bg-white p-4 shadow-sm border-b-2 border-sky-100 flex justify-between items-center z-10">
            <button 
                onClick={handleBack}
                className="flex items-center gap-2 text-sky-600 font-bold hover:bg-sky-50 px-3 py-1 rounded-lg transition-colors"
            >
                <Home size={24} />
                <span className="hidden md:inline">Menú</span>
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-sky-800 text-center truncate px-4">
                {currentLevel?.title}
            </h2>
            <div className="flex gap-2">
                <button 
                    onClick={() => speakText(currentLevel?.instruction || '')}
                    className="p-2 text-orange-400 hover:text-orange-600 rounded-full hover:bg-orange-50 bg-orange-50 border border-orange-200"
                    title="Repetir instrucción"
                >
                    <Volume2 size={24} />
                </button>
                <button 
                    onClick={() => setGameState(prev => ({...prev, currentLevelId: prev.currentLevelId}))} 
                    className="p-2 text-gray-400 hover:text-sky-600 rounded-full hover:bg-sky-50"
                >
                    <RotateCcw size={24} />
                </button>
            </div>
        </nav>

        {/* Instruction Bar */}
        <div className="bg-yellow-100 p-4 text-center border-b border-yellow-200">
            <p className="text-lg text-yellow-800 font-medium">
                {currentLevel?.instruction}
            </p>
        </div>

        <main className="flex-1 flex flex-col items-center justify-start p-4 relative overflow-hidden">
             {/* Decorative Blobs */}
             <div className="absolute top-10 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
             <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

             {/* Workbook Header (Día Mes Año) */}
             <div className="w-full max-w-4xl px-4 mb-6 mt-2 flex justify-between items-end select-none pointer-events-none opacity-80 z-10">
                <div className="flex flex-col gap-1">
                    <div className="flex gap-4 text-orange-400 text-sm font-bold ml-1">
                        <span>Día</span>
                        <span>Mes</span>
                        <span>Año</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-12 h-8 border-2 border-orange-300 rounded-full bg-white/60"></div>
                        <div className="w-12 h-8 border-2 border-orange-300 rounded-full bg-white/60"></div>
                        <div className="w-12 h-8 border-2 border-orange-300 rounded-full bg-white/60"></div>
                    </div>
                </div>
                <div className="text-orange-300 transform -rotate-12 pb-2 pr-2">
                    <PenTool size={48} className="fill-orange-100" />
                </div>
             </div>

             <div className="z-10 w-full flex-1 flex flex-col justify-center">
                {renderGame()}
             </div>
        </main>
    </div>
  );
};

export default App;