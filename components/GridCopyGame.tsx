import React, { useState, useRef, useEffect } from 'react';
import { LevelData, GridPoint, GridLine } from '../types';
import { RefreshCw } from 'lucide-react';

interface Props {
  level: LevelData;
  onComplete: () => void;
  onSpeak: (text: string) => void;
  childName: string;
}

export const GridCopyGame: React.FC<Props> = ({ level, onComplete, onSpeak, childName }) => {
  const [taskIndex, setTaskIndex] = useState(0);
  const tasks = level.gridCopyTasks || [];
  const currentTask = tasks[taskIndex];
  
  // State for user drawing
  const [userLines, setUserLines] = useState<GridLine[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState<GridPoint | null>(null);
  const [currentDragPos, setCurrentDragPos] = useState<{x: number, y: number} | null>(null);
  
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Clear lines when task changes
    setUserLines([]);
    setStartPoint(null);
    setCurrentDragPos(null);
    setIsDrawing(false);
  }, [taskIndex]);

  if (!currentTask) return <div>No tasks</div>;

  const GRID_SIZE = 30; // pixels per cell
  const DOT_RADIUS = 4;
  const TOUCH_RADIUS = 15; // Larger hit area
  const WIDTH = (currentTask.cols - 1) * GRID_SIZE + 40; // padding
  const HEIGHT = (currentTask.rows - 1) * GRID_SIZE + 40;

  const getCoordinates = (r: number, c: number) => ({
    x: c * GRID_SIZE + 20,
    y: r * GRID_SIZE + 20
  });

  const getPointFromEvent = (e: React.MouseEvent | React.TouchEvent) => {
    if (!svgRef.current) return null;
    const rect = svgRef.current.getBoundingClientRect();
    
    let clientX, clientY;

    if ('changedTouches' in e) {
        // Touchend uses changedTouches
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
    } else if ('touches' in e) {
        // Touchstart/move uses touches
        if (e.touches.length === 0) return null;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        // Mouse
        clientX = (e as React.MouseEvent).clientX;
        clientY = (e as React.MouseEvent).clientY;
    }
    
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const getNearestDot = (x: number, y: number): GridPoint | null => {
    const col = Math.round((x - 20) / GRID_SIZE);
    const row = Math.round((y - 20) / GRID_SIZE);
    
    // Check bounds (allow slightly outside drag but snap to nearest valid)
    if (col >= 0 && col < currentTask.cols && row >= 0 && row < currentTask.rows) {
        return { r: row, c: col };
    }
    return null;
  };

  const handleStart = (r: number, c: number, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent scrolling on touch
    
    // Auto-clear if it's a single line task to allow quick retries
    if (currentTask.targetLines.length === 1 && userLines.length > 0) {
        setUserLines([]);
    }
    
    setIsDrawing(true);
    setStartPoint({ r, c });
    const point = getCoordinates(r, c);
    setCurrentDragPos(point);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const pos = getPointFromEvent(e);
    if (pos) setCurrentDragPos(pos);
  };

  const handleEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !startPoint) return;
    
    const pos = getPointFromEvent(e);
    
    // If we have a valid position (either from event or last drag), try to snap
    const finalPos = pos || currentDragPos;
    
    if (finalPos) {
        const endDot = getNearestDot(finalPos.x, finalPos.y);
        
        // Ensure we dragged to a different dot
        if (endDot && (endDot.r !== startPoint.r || endDot.c !== startPoint.c)) {
            // Check if line already exists to avoid duplicates
            const exists = userLines.some(l => 
                (l.start.r === startPoint.r && l.start.c === startPoint.c && l.end.r === endDot.r && l.end.c === endDot.c) ||
                (l.start.r === endDot.r && l.start.c === endDot.c && l.end.r === startPoint.r && l.end.c === startPoint.c)
            );

            if (!exists) {
                const newLine = { start: startPoint, end: endDot, color: 'stroke-blue-500' };
                const newLines = [...userLines, newLine];
                setUserLines(newLines);
                checkCompletion(newLines);
            }
        }
    }
    
    setIsDrawing(false);
    setStartPoint(null);
    setCurrentDragPos(null);
  };

  const checkCompletion = (lines: GridLine[]) => {
    if (lines.length !== currentTask.targetLines.length) return;

    const allMatch = currentTask.targetLines.every(target => {
        return lines.some(user => {
            const matchNormal = (user.start.r === target.start.r && user.start.c === target.start.c && user.end.r === target.end.r && user.end.c === target.end.c);
            const matchReverse = (user.start.r === target.end.r && user.start.c === target.end.c && user.end.r === target.start.r && user.end.c === target.start.c);
            return matchNormal || matchReverse;
        });
    });

    if (allMatch) {
        onSpeak(`¡Perfecto, ${childName}!`);
        setTimeout(() => {
            if (taskIndex < tasks.length - 1) {
                setTaskIndex(prev => prev + 1);
                onSpeak("Siguiente dibujo");
            } else {
                onComplete();
            }
        }, 1500);
    }
  };

  const reset = () => {
    setUserLines([]);
  };

  const renderGrid = (lines: GridLine[], isInteractive: boolean) => (
    <div className={`relative bg-white rounded-xl shadow-md border-4 ${isInteractive ? 'border-blue-200' : 'border-gray-200'} p-4 select-none`}>
        {/* Label */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 text-sm font-bold text-gray-500">
            {isInteractive ? "TÚ" : "MODELO"}
        </div>

        <svg 
            ref={isInteractive ? svgRef : undefined}
            width={WIDTH} 
            height={HEIGHT} 
            className={isInteractive ? "touch-none cursor-crosshair" : "pointer-events-none"}
            onMouseMove={isInteractive ? handleMove : undefined}
            onTouchMove={isInteractive ? handleMove : undefined}
            onMouseUp={isInteractive ? handleEnd : undefined}
            onTouchEnd={isInteractive ? handleEnd : undefined}
            onMouseLeave={isInteractive ? () => { if(isDrawing) setIsDrawing(false); } : undefined}
        >
            {/* Grid Dots */}
            {Array.from({ length: currentTask.rows }).map((_, r) => 
                Array.from({ length: currentTask.cols }).map((_, c) => {
                    const { x, y } = getCoordinates(r, c);
                    return (
                        <g key={`${r}-${c}`}>
                            {/* Visual Dot */}
                            <circle 
                                cx={x} 
                                cy={y} 
                                r={DOT_RADIUS} 
                                className="text-gray-400 fill-current" 
                            />
                            {/* Hit Area (Invisible larger circle) */}
                            {isInteractive && (
                                <circle 
                                    cx={x} 
                                    cy={y} 
                                    r={TOUCH_RADIUS} 
                                    fill="transparent"
                                    className="cursor-pointer hover:fill-blue-100/50"
                                    onMouseDown={(e) => handleStart(r, c, e)}
                                    onTouchStart={(e) => handleStart(r, c, e)}
                                />
                            )}
                        </g>
                    );
                })
            )}

            {/* Drawn Lines */}
            {lines.map((line, i) => {
                const start = getCoordinates(line.start.r, line.start.c);
                const end = getCoordinates(line.end.r, line.end.c);
                return (
                    <line 
                        key={i} 
                        x1={start.x} y1={start.y} 
                        x2={end.x} y2={end.y} 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        className={isInteractive ? "stroke-blue-500" : "stroke-red-500"} 
                    />
                );
            })}

            {/* Drawing Line Preview */}
            {isDrawing && startPoint && currentDragPos && (
                <line 
                    x1={getCoordinates(startPoint.r, startPoint.c).x} 
                    y1={getCoordinates(startPoint.r, startPoint.c).y} 
                    x2={currentDragPos.x} 
                    y2={currentDragPos.y} 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="stroke-blue-400 stroke-dashed opacity-70 pointer-events-none"
                />
            )}
        </svg>
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto p-4 gap-6">
       
        <div className="text-orange-400 font-bold text-lg mb-2">
            Ejercicio {taskIndex + 1} de {tasks.length}
        </div>

        {currentTask.instructionOverride && (
             <p className="text-center text-gray-600 font-medium animate-bounce-small">{currentTask.instructionOverride}</p>
        )}

        {/* Model Grid */}
        {renderGrid(currentTask.targetLines, false)}

        {/* User Grid */}
        <div className="relative">
             {renderGrid(userLines, true)}
             <button 
                onClick={reset}
                className="absolute -right-12 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-600 shadow-sm transition-colors"
                title="Borrar todo"
             >
                <RefreshCw size={24} />
             </button>
        </div>

        <p className="text-sm text-gray-400 text-center animate-pulse">
            {isDrawing ? "Suelta para conectar" : "Toca un punto y arrastra"}
        </p>

    </div>
  );
};
