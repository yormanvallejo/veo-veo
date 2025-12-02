import React, { useState, useEffect } from 'react';
import { LevelData } from '../types';
import { Circle, Square, Triangle, Heart } from 'lucide-react'; 

interface Props {
  level: LevelData;
  onComplete: () => void;
  onSpeak: (text: string) => void;
  childName: string;
}

export const SelectionGame: React.FC<Props> = ({ level, onComplete, onSpeak, childName }) => {
  const [taskIndex, setTaskIndex] = useState(0);
  const [foundIds, setFoundIds] = useState<string[]>([]);
  
  const tasks = level.selectionTasks || [];
  const currentTask = tasks[taskIndex];

  // Calculate total correct items
  const totalCorrect = currentTask?.items.filter(i => i.isCorrect).length || 0;

  useEffect(() => {
    if (foundIds.length > 0 && foundIds.length === totalCorrect) {
      onSpeak(`¡Excelente trabajo, ${childName}!`);
      setTimeout(() => {
          if (taskIndex < tasks.length - 1) {
              setTaskIndex(prev => prev + 1);
              setFoundIds([]);
              // The main instruction will be read by App.tsx effect, but we can nudge here if needed
          } else {
              onComplete();
          }
      }, 1500);
    }
  }, [foundIds, totalCorrect, onComplete, taskIndex, tasks.length, childName, onSpeak]);

  if (!currentTask) return <div>No tasks loaded</div>;

  const handleItemClick = (id: string, isCorrect: boolean, iconName: string) => {
    if (foundIds.includes(id)) return;

    if (isCorrect) {
      setFoundIds(prev => [...prev, id]);
      onSpeak("¡Encontrado!");
    } else {
      onSpeak("Intenta de nuevo");
    }
  };

  const renderIcon = (type: string, className: string) => {
    switch (type) {
      case 'triangle': return <Triangle className={className} fill="currentColor" />;
      case 'square': return <Square className={className} fill="currentColor" />;
      case 'circle': return <Circle className={className} fill="currentColor" />;
      case 'star': return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
      case 'heart': return <Heart className={className} fill="currentColor" />;
      case 'balloon': return <div className={`${className} rounded-full bg-current`} style={{ borderRadius: '50% 50% 50% 0' }} />;
      default: return <Circle className={className} />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Progress */}
      <div className="mb-4 text-center text-orange-400 font-bold text-lg">
        Ejercicio {taskIndex + 1} de {tasks.length}
      </div>
      
      {currentTask.instructionOverride && (
          <p className="text-center text-gray-600 mb-4 font-semibold">{currentTask.instructionOverride}</p>
      )}

      <div className="flex justify-between items-center mb-6">
        <div className="bg-white px-4 py-2 rounded-full shadow border-2 border-orange-300">
           <span className="text-orange-600 font-bold">Encontrados: {foundIds.length} / {totalCorrect}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {currentTask.items.map((item) => {
            const isFound = foundIds.includes(item.id);
            const scale = item.scale || 1;
            
            return (
                <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id, item.isCorrect, item.icon)}
                    style={{ transform: `scale(${scale})` }}
                    className={`
                        p-4 rounded-xl transition-all duration-300 relative
                        ${isFound ? 'bg-green-100 ring-4 ring-green-400' : 'hover:bg-white/50'}
                    `}
                >
                    <div className={`${item.color} w-20 h-20`}>
                        {renderIcon(item.icon, "w-full h-full")}
                    </div>
                    {isFound && (
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 animate-bounce">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                    )}
                </button>
            )
        })}
      </div>
    </div>
  );
};