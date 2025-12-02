import React from 'react';
import { Circle, Square, Triangle, Star, Heart, Diamond, Flower, Plus, X, Hexagon, Moon, Sun } from 'lucide-react';
import { ShapeType } from '../types';

interface ShapeIconProps {
  shape: string;
  className?: string;
  content?: string;
}

export const ShapeIcon: React.FC<ShapeIconProps> = ({ shape, className, content }) => {
  const commonClasses = `w-full h-full ${className || ''}`;
  
  if (content) {
     return (
        <div className={`flex items-center justify-center font-bold text-4xl text-gray-700 ${className}`}>
            {content}
        </div>
     )
  }

  switch (shape) {
    case 'circle': return <Circle className={commonClasses} fill="currentColor" />;
    case 'square': return <Square className={commonClasses} fill="currentColor" />;
    case 'triangle': return <Triangle className={commonClasses} fill="currentColor" />;
    case 'star': return <Star className={commonClasses} fill="currentColor" />;
    case 'heart': return <Heart className={commonClasses} fill="currentColor" />;
    case 'diamond': return <Diamond className={commonClasses} fill="currentColor" />;
    case 'flower': return <Flower className={commonClasses} fill="currentColor" />;
    case 'cross': return <X className={commonClasses} strokeWidth={3} />;
    case 'plus': return <Plus className={commonClasses} strokeWidth={3} />;
    case 'hexagon': return <Hexagon className={commonClasses} fill="currentColor" />;
    case 'moon': return <Moon className={commonClasses} fill="currentColor" />;
    case 'sun': return <Sun className={commonClasses} fill="currentColor" />;
    
    // Level 7 Shapes
    case 'diagonal': 
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="4" y1="20" x2="20" y2="4" />
          <circle cx="4" cy="20" r="2.5" fill="currentColor" stroke="none" />
          <circle cx="20" cy="4" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'dash': 
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="currentColor">
           <rect x="4" y="9" width="16" height="6" rx="1" />
        </svg>
      );

    // Level 8 Shapes (Buttons)
    case 'button-round':
    case 'button-round-up':
    case 'button-round-down':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="7" strokeWidth="1" opacity="0.5" />
          <circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="15" cy="9" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="9" cy="15" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="15" cy="15" r="1.5" fill="currentColor" stroke="none" />
          
          {shape === 'button-round' && <path d="M9 9 L15 15 M15 9 L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
          {/* Curved thread UP */}
          {shape === 'button-round-up' && (
             <path d="M15 9 Q24 0 24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" className="text-pink-500" />
          )}
          {shape === 'button-round-up' && (
              <path d="M9 9 L15 15 M15 9 L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          )}
           {/* Curved thread DOWN */}
           {shape === 'button-round-down' && (
             <path d="M15 15 Q24 24 24 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" className="text-pink-500" />
          )}
        </svg>
      );
    case 'button-oval':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="6" />
          <rect x="4" y="8" width="16" height="8" rx="4" strokeWidth="1" opacity="0.5" />
          <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'button-square':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <rect x="5" y="5" width="14" height="14" rx="3" strokeWidth="1" opacity="0.5" />
          <circle cx="9" cy="9" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="15" cy="9" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="9" cy="15" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="15" cy="15" r="1.5" fill="currentColor" stroke="none" />
          <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // Level 9 Shapes
    case 'square-dot':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" />
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'square-arrow':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="2" y="2" width="20" height="20" />
           <path d="M18 6 L6 18" strokeWidth="2.5" strokeLinecap="round" />
           <path d="M6 18 L6 10 M6 18 L14 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    
    // Level 10 Shapes (Directional Arrows with Corner Dots)
    case 'arrow-tr-bl': // Top Right to Bottom Left
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="2" y="2" width="20" height="20" strokeWidth="1" opacity="0.2" />
           <circle cx="18" cy="6" r="2" fill="currentColor" stroke="none" />
           <circle cx="6" cy="18" r="2" fill="currentColor" stroke="none" />
           <path d="M18 6 L6 18" strokeWidth="2.5" strokeLinecap="round" />
           <path d="M6 18 L6 10 M6 18 L14 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'arrow-tl-br': // Top Left to Bottom Right
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="2" y="2" width="20" height="20" strokeWidth="1" opacity="0.2" />
           <circle cx="6" cy="6" r="2" fill="currentColor" stroke="none" />
           <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
           <path d="M6 6 L18 18" strokeWidth="2.5" strokeLinecap="round" />
           <path d="M18 18 L10 18 M18 18 L18 10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'arrow-bl-tr': // Bottom Left to Top Right
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="2" y="2" width="20" height="20" strokeWidth="1" opacity="0.2" />
           <circle cx="6" cy="18" r="2" fill="currentColor" stroke="none" />
           <circle cx="18" cy="6" r="2" fill="currentColor" stroke="none" />
           <path d="M6 18 L18 6" strokeWidth="2.5" strokeLinecap="round" />
           <path d="M18 6 L10 6 M18 6 L18 14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'arrow-br-tl': // Bottom Right to Top Left
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="2" y="2" width="20" height="20" strokeWidth="1" opacity="0.2" />
           <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
           <circle cx="6" cy="6" r="2" fill="currentColor" stroke="none" />
           <path d="M18 18 L6 6" strokeWidth="2.5" strokeLinecap="round" />
           <path d="M6 6 L14 6 M6 6 L6 14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    
    // Level 12 Shapes (Squares with X and Box)
    case 'square-x':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" />
          <line x1="2" y1="2" x2="22" y2="22" />
          <line x1="22" y1="2" x2="2" y2="22" />
        </svg>
      );
    case 'square-box':
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" />
          <rect x="8" y="8" width="8" height="8" fill="currentColor" stroke="none" />
        </svg>
      );

    default: return <Circle className={commonClasses} />;
  }
};