import { LucideIcon } from 'lucide-react';

export enum GameType {
  PATTERN = 'PATTERN',
  MAZE = 'MAZE',
  COUNTING = 'COUNTING',
  SELECTION = 'SELECTION',
  GRID_COPY = 'GRID_COPY',
}

export type ShapeType = 
  | 'square' | 'circle' | 'triangle' | 'star' | 'heart' | 'diamond' | 'flower' 
  | 'cross' | 'plus' | 'hexagon' | 'moon' | 'sun'
  | 'diagonal' | 'dash' 
  | 'button-round' | 'button-oval' | 'button-square' | 'button-round-up' | 'button-round-down'
  | 'square-dot' | 'square-arrow'
  | 'arrow-tr-bl' | 'arrow-tl-br' | 'arrow-bl-tr' | 'arrow-br-tl'
  | 'square-x' | 'square-box';

export interface PatternItem {
  id: string;
  color: string;
  shape: ShapeType;
  content?: string; // For letters
}

export interface PatternTask {
  id: string;
  sequence: PatternItem[];
  options: PatternItem[];
  correctOptionId: string;
}

export interface MazeGrid {
  rows: number;
  cols: number;
  layout: number[][]; // 0: Path, 1: Wall, 2: Start, 3: End
  start: { r: number; c: number };
}

export interface MazeTask {
  id: string;
  grid: MazeGrid;
}

export interface SelectionItem {
  id: string;
  icon: string; // key for icon mapping
  color: string;
  isCorrect: boolean;
  scale?: number;
}

export interface SelectionTask {
  id: string;
  items: SelectionItem[];
  instructionOverride?: string;
}

export interface GridPoint {
  r: number;
  c: number;
}

export interface GridLine {
  start: GridPoint;
  end: GridPoint;
  color?: string;
}

export interface GridCopyTask {
  id: string;
  rows: number;
  cols: number;
  targetLines: GridLine[];
  instructionOverride?: string;
}

export interface LevelData {
  id: number;
  type: GameType;
  title: string;
  instruction: string;
  // Arrays for multiple tasks per level
  patternTasks?: PatternTask[];
  mazeTasks?: MazeTask[];
  selectionTasks?: SelectionTask[];
  gridCopyTasks?: GridCopyTask[];
  bgImage?: string; 
}

export interface GameState {
  childName: string; // Added name field
  currentLevelId: number | null;
  completedLevels: number[];
  score: number;
}