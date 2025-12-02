import React, { useState } from 'react';
import { LevelData, PatternItem } from '../types';
import { ShapeIcon } from './ShapeIcon';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  level: LevelData;
  onComplete: () => void;
  onSpeak: (text: string) => void;
  childName: string;
}

export const PatternGame: React.FC<Props> = ({ level, onComplete, onSpeak, childName }) => {
  const [taskIndex, setTaskIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const tasks = level.patternTasks || [];
  const currentTask = tasks[taskIndex];

  if (!currentTask) return <div>No tasks loaded</div>;

  const handleSelect = (option: PatternItem) => {
    if (feedback === 'correct') return;
    
    setSelectedOption(option.id);
    const isCorrect = option.id === currentTask.correctOptionId;

    if (isCorrect) {
      setFeedback('correct');
      onSpeak(`¡Muy bien, ${childName}!`);
      setTimeout(() => {
        if (taskIndex < tasks.length - 1) {
            setTaskIndex(prev => prev + 1);
            setFeedback(null);
            setSelectedOption(null);
            onSpeak("Siguiente ejercicio");
        } else {
            onComplete();
        }
      }, 1500);
    } else {
      setFeedback('incorrect');
      onSpeak("Intenta de nuevo");
      setTimeout(() => {
        setFeedback(null);
        setSelectedOption(null);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-4">
      
      {/* Progress */}
      <div className="mb-4 text-orange-400 font-bold text-lg">
        Ejercicio {taskIndex + 1} de {tasks.length}
      </div>

      {/* Sequence Display */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12 p-6 bg-white rounded-xl shadow-lg border-4 border-orange-200">
        {currentTask.sequence?.map((item, index) => {
          const isQuestion = item.id === 'q';
          const displayItem = (feedback === 'correct' && isQuestion && selectedOption) 
            ? currentTask.options?.find(o => o.id === selectedOption) || item
            : item;

          const isLineShape = [
            'diagonal', 'dash', 'button-round', 'button-oval', 'button-square', 
            'button-round-up', 'button-round-down', 'square-dot', 'square-arrow',
            'cross', 'plus', 'hexagon'
          ].includes(displayItem.shape) || (displayItem.shape === 'square' && displayItem.color.startsWith('text-'));

          return (
            <div 
              key={index} 
              className={`
                w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-lg shadow-sm transition-all
                ${displayItem.color.startsWith('bg-') ? displayItem.color : 'bg-white border-2 border-gray-300'}
                ${isQuestion ? 'border-4 border-dashed border-gray-400 bg-gray-100' : ''}
              `}
            >
              {isQuestion && !feedback ? (
                <span className="text-4xl text-gray-400 font-bold">?</span>
              ) : (
                <div className={`w-10 h-10 md:w-16 md:h-16 ${
                    displayItem.shape === 'square' || displayItem.shape === 'diamond' || isLineShape 
                    ? displayItem.color.startsWith('text-') ? displayItem.color : 'text-transparent' 
                    : 'text-white'
                }`}>
                    <ShapeIcon shape={displayItem.shape} content={displayItem.content} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Options */}
      <div className="grid grid-cols-3 gap-6">
        {currentTask.options?.map((option) => {
             const isLineShape = [
                'diagonal', 'dash', 'button-round', 'button-oval', 'button-square', 
                'button-round-up', 'button-round-down', 'square-dot', 'square-arrow',
                'cross', 'plus', 'hexagon'
             ].includes(option.shape) || (option.shape === 'square' && option.color.startsWith('text-'));
             
             return (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`
                  w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-xl shadow-md border-b-4 transition-transform hover:scale-105 active:scale-95
                  ${option.color.startsWith('bg-') ? option.color : 'bg-white border-2 border-gray-300'}
                  border-black/20
                `}
              >
                 <div className={`w-12 h-12 md:w-16 md:h-16 ${
                    option.shape === 'square' || option.shape === 'diamond' || isLineShape
                    ? option.color.startsWith('text-') ? option.color : 'text-transparent'
                    : 'text-white'
                 }`}>
                    <ShapeIcon shape={option.shape} content={option.content} />
                 </div>
              </button>
            )
        })}
      </div>

      {/* Feedback Overlay */}
      {feedback && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className={`
            p-6 rounded-full shadow-2xl transform scale-150 animate-bounce-small
            ${feedback === 'correct' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
          `}>
            {feedback === 'correct' ? <CheckCircle2 size={64} /> : <XCircle size={64} />}
          </div>
        </div>
      )}
    </div>
  );
};