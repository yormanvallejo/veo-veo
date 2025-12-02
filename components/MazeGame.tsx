import React, { useState, useEffect } from 'react';
import { LevelData } from '../types';
import { Rat, Cookie, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  level: LevelData;
  onComplete: () => void;
  onSpeak: (text: string) => void;
  childName: string;
}

export const MazeGame: React.FC<Props> = ({ level, onComplete, onSpeak, childName }) => {
  const [taskIndex, setTaskIndex] = useState(0);
  const tasks = level.mazeTasks || [];
  const currentTask = tasks[taskIndex];
  
  const [pos, setPos] = useState({ r: 0, c: 0 }); // Initialize, will update in useEffect

  useEffect(() => {
    if (currentTask) {
        setPos(currentTask.grid.start);
    }
  }, [currentTask]);

  if (!currentTask) return <div>No maze data</div>;

  const move = (dr: number, dc: number) => {
    const { grid } = currentTask;
    const newR = pos.r + dr;
    const newC = pos.c + dc;

    // Boundary check
    if (newR < 0 || newR >= grid.rows || newC < 0 || newC >= grid.cols) return;

    // Wall check (1 is wall)
    if (grid.layout[newR][newC] === 1) return;

    setPos({ r: newR, c: newC });

    // Win check (3 is end)
    if (grid.layout[newR][newC] === 3) {
      onSpeak(`¡Llegaste a la meta, ${childName}!`);
      setTimeout(() => {
          if (taskIndex < tasks.length - 1) {
              setTaskIndex(prev => prev + 1);
              onSpeak("Siguiente laberinto");
          } else {
              onComplete();
          }
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6" tabIndex={0} onKeyDown={(e) => {
        if(e.key === 'ArrowUp') move(-1, 0);
        if(e.key === 'ArrowDown') move(1, 0);
        if(e.key === 'ArrowLeft') move(0, -1);
        if(e.key === 'ArrowRight') move(0, 1);
    }}>
      
      {/* Progress */}
      <div className="mb-2 text-orange-400 font-bold text-lg">
        Laberinto {taskIndex + 1} de {tasks.length}
      </div>

      {/* Maze Grid */}
      <div 
        className="grid bg-orange-100 border-4 border-orange-400 p-2 rounded-lg shadow-xl"
        style={{ 
            gridTemplateColumns: `repeat(${currentTask.grid.cols}, minmax(0, 1fr))` 
        }}
      >
        {currentTask.grid.layout.map((row, r) => (
          row.map((cell, c) => {
            const isPlayer = pos.r === r && pos.c === c;
            const isWall = cell === 1;
            const isGoal = cell === 3;

            return (
              <div 
                key={`${r}-${c}`} 
                className={`
                  w-12 h-12 md:w-16 md:h-16 flex items-center justify-center
                  ${isWall ? 'bg-orange-800 rounded-sm' : 'bg-orange-100'}
                `}
              >
                {isGoal && <Cookie className="text-yellow-600 animate-pulse" size={32} />}
                {isPlayer && <Rat className="text-gray-700 transition-all duration-200" size={36} />}
              </div>
            );
          })
        ))}
      </div>

      {/* Touch Controls */}
      <div className="grid grid-cols-3 gap-2 mt-4 md:hidden">
        <div />
        <button onClick={() => move(-1, 0)} className="bg-orange-400 p-4 rounded-full text-white active:bg-orange-600 shadow-md">
            <ChevronUp size={32} />
        </button>
        <div />
        <button onClick={() => move(0, -1)} className="bg-orange-400 p-4 rounded-full text-white active:bg-orange-600 shadow-md">
            <ChevronLeft size={32} />
        </button>
        <div />
        <button onClick={() => move(0, 1)} className="bg-orange-400 p-4 rounded-full text-white active:bg-orange-600 shadow-md">
            <ChevronRight size={32} />
        </button>
        <div />
        <button onClick={() => move(1, 0)} className="bg-orange-400 p-4 rounded-full text-white active:bg-orange-600 shadow-md">
            <ChevronDown size={32} />
        </button>
        <div />
      </div>

      <p className="text-orange-800/60 text-sm hidden md:block">Usa las flechas del teclado</p>
    </div>
  );
};