
import { LevelData, GameType } from './types';

// Data derived from the "Veo, veo inicial 3" PDF
// Expanded to 4 exercises per level as requested

export const LEVELS: LevelData[] = [
  {
    id: 1,
    type: GameType.PATTERN,
    title: "Series de Colores",
    instruction: "Copia la serie de colores y complétala.",
    patternTasks: [
      {
        id: 't1',
        correctOptionId: 'opt2',
        sequence: [
          { id: '1', color: 'bg-green-500', shape: 'square' },
          { id: '2', color: 'bg-yellow-400', shape: 'circle' },
          { id: '3', color: 'bg-green-500', shape: 'square' },
          { id: '4', color: 'bg-yellow-400', shape: 'circle' },
          { id: '5', color: 'bg-green-500', shape: 'square' },
          { id: 'q', color: 'bg-gray-200', shape: 'circle' },
        ],
        options: [
          { id: 'opt1', color: 'bg-red-500', shape: 'circle' },
          { id: 'opt2', color: 'bg-yellow-400', shape: 'circle' },
          { id: 'opt3', color: 'bg-blue-500', shape: 'square' },
        ]
      },
      {
        id: 't2',
        correctOptionId: 'opt1',
        sequence: [
          { id: '1', color: 'bg-blue-500', shape: 'triangle' },
          { id: '2', color: 'bg-red-500', shape: 'square' },
          { id: '3', color: 'bg-blue-500', shape: 'triangle' },
          { id: '4', color: 'bg-red-500', shape: 'square' },
          { id: '5', color: 'bg-blue-500', shape: 'triangle' },
          { id: 'q', color: 'bg-gray-200', shape: 'square' },
        ],
        options: [
          { id: 'opt1', color: 'bg-red-500', shape: 'square' },
          { id: 'opt2', color: 'bg-blue-500', shape: 'triangle' },
          { id: 'opt3', color: 'bg-yellow-400', shape: 'square' },
        ]
      },
      {
        id: 't3',
        correctOptionId: 'opt3',
        sequence: [
            { id: '1', color: 'bg-purple-500', shape: 'circle' },
            { id: '2', color: 'bg-orange-500', shape: 'diamond' },
            { id: '3', color: 'bg-purple-500', shape: 'circle' },
            { id: '4', color: 'bg-orange-500', shape: 'diamond' },
            { id: '5', color: 'bg-purple-500', shape: 'circle' },
            { id: 'q', color: 'bg-gray-200', shape: 'diamond' },
        ],
        options: [
            { id: 'opt1', color: 'bg-purple-500', shape: 'circle' },
            { id: 'opt2', color: 'bg-green-500', shape: 'diamond' },
            { id: 'opt3', color: 'bg-orange-500', shape: 'diamond' },
        ]
      },
      {
        id: 't4',
        correctOptionId: 'opt1',
        sequence: [
            { id: '1', color: 'bg-pink-500', shape: 'heart' },
            { id: '2', color: 'bg-pink-500', shape: 'heart' },
            { id: '3', color: 'bg-blue-400', shape: 'star' },
            { id: '4', color: 'bg-pink-500', shape: 'heart' },
            { id: '5', color: 'bg-pink-500', shape: 'heart' },
            { id: 'q', color: 'bg-gray-200', shape: 'star' },
        ],
        options: [
            { id: 'opt1', color: 'bg-blue-400', shape: 'star' },
            { id: 'opt2', color: 'bg-pink-500', shape: 'heart' },
            { id: 'opt3', color: 'bg-yellow-400', shape: 'star' },
        ]
      }
    ]
  },
  {
    id: 2,
    type: GameType.SELECTION,
    title: "Triángulos y Formas",
    instruction: "Encuentra y selecciona las figuras indicadas.",
    selectionTasks: [
        {
            id: 't1',
            instructionOverride: "Encuentra todos los triángulos azules.",
            items: [
                { id: '1', icon: 'triangle', color: 'text-yellow-400', isCorrect: false },
                { id: '2', icon: 'triangle', color: 'text-blue-500', isCorrect: true },
                { id: '3', icon: 'square', color: 'text-blue-500', isCorrect: false },
                { id: '4', icon: 'triangle', color: 'text-red-500', isCorrect: false },
                { id: '5', icon: 'triangle', color: 'text-blue-500', isCorrect: true },
                { id: '6', icon: 'circle', color: 'text-yellow-400', isCorrect: false },
            ]
        },
        {
            id: 't2',
            instructionOverride: "Encuentra todos los cuadrados rojos.",
            items: [
                { id: '1', icon: 'square', color: 'text-red-500', isCorrect: true },
                { id: '2', icon: 'triangle', color: 'text-red-500', isCorrect: false },
                { id: '3', icon: 'square', color: 'text-blue-500', isCorrect: false },
                { id: '4', icon: 'square', color: 'text-red-500', isCorrect: true },
                { id: '5', icon: 'circle', color: 'text-red-500', isCorrect: false },
                { id: '6', icon: 'square', color: 'text-green-500', isCorrect: false },
            ]
        },
        {
            id: 't3',
            instructionOverride: "Encuentra todos los círculos verdes.",
            items: [
                { id: '1', icon: 'circle', color: 'text-green-500', isCorrect: true },
                { id: '2', icon: 'circle', color: 'text-blue-500', isCorrect: false },
                { id: '3', icon: 'square', color: 'text-green-500', isCorrect: false },
                { id: '4', icon: 'triangle', color: 'text-green-500', isCorrect: false },
                { id: '5', icon: 'circle', color: 'text-green-500', isCorrect: true },
                { id: '6', icon: 'circle', color: 'text-red-500', isCorrect: false },
            ]
        },
        {
            id: 't4',
            instructionOverride: "Encuentra todos los corazones rosas.",
            items: [
                { id: '1', icon: 'heart', color: 'text-pink-500', isCorrect: true },
                { id: '2', icon: 'star', color: 'text-pink-500', isCorrect: false },
                { id: '3', icon: 'heart', color: 'text-purple-500', isCorrect: false },
                { id: '4', icon: 'heart', color: 'text-pink-500', isCorrect: true },
                { id: '5', icon: 'heart', color: 'text-pink-500', isCorrect: true },
                { id: '6', icon: 'circle', color: 'text-pink-500', isCorrect: false },
            ]
        }
    ]
  },
  {
    id: 3,
    type: GameType.MAZE,
    title: "El Laberinto",
    instruction: "Encuentra el camino hacia la meta.",
    mazeTasks: [
        {
            id: 'm1',
            grid: {
                rows: 5,
                cols: 5,
                start: { r: 0, c: 0 },
                layout: [
                    [2, 0, 1, 1, 1],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 0, 1],
                    [1, 3, 0, 0, 1],
                    [1, 1, 1, 1, 1]
                ]
            }
        },
        {
            id: 'm2',
            grid: {
                rows: 6,
                cols: 6,
                start: { r: 5, c: 0 },
                layout: [
                    [1, 3, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0, 1],
                    [0, 0, 0, 0, 0, 1],
                    [0, 1, 1, 1, 0, 1],
                    [0, 1, 0, 0, 0, 1],
                    [2, 0, 0, 1, 1, 1]
                ]
            }
        },
        {
            id: 'm3',
            grid: {
                rows: 5,
                cols: 5,
                start: { r: 0, c: 4 },
                layout: [
                    [1, 1, 1, 1, 2],
                    [1, 0, 0, 0, 0],
                    [1, 0, 1, 1, 1],
                    [1, 0, 0, 0, 3],
                    [1, 1, 1, 1, 1]
                ]
            }
        },
        {
            id: 'm4',
            grid: {
                rows: 6,
                cols: 6,
                start: { r: 0, c: 0 },
                layout: [
                    [2, 0, 0, 1, 1, 1],
                    [1, 1, 0, 1, 0, 0],
                    [1, 0, 0, 0, 0, 1],
                    [1, 0, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0, 3],
                    [1, 1, 1, 1, 1, 1]
                ]
            }
        }
    ]
  },
  {
    id: 4,
    type: GameType.PATTERN,
    title: "Letras y Colores",
    instruction: "Copia la serie de letras.",
    patternTasks: [
        {
            id: 't1',
            correctOptionId: 'opt1',
            sequence: [
                { id: '1', color: 'bg-blue-200', shape: 'square', content: 'D' },
                { id: '2', color: 'bg-white', shape: 'square', content: 'd' },
                { id: '3', color: 'bg-blue-200', shape: 'square', content: 'D' },
                { id: '4', color: 'bg-white', shape: 'square', content: 'd' },
                { id: 'q', color: 'bg-gray-100', shape: 'square', content: '?' },
            ],
            options: [
                { id: 'opt1', color: 'bg-blue-200', shape: 'square', content: 'D' },
                { id: 'opt2', color: 'bg-white', shape: 'square', content: 'd' },
                { id: 'opt3', color: 'bg-red-200', shape: 'square', content: 'P' },
            ]
        },
        {
            id: 't2',
            correctOptionId: 'opt2',
            sequence: [
                { id: '1', color: 'bg-pink-200', shape: 'square', content: 'E' },
                { id: '2', color: 'bg-white', shape: 'square', content: 'e' },
                { id: '3', color: 'bg-pink-200', shape: 'square', content: 'E' },
                { id: '4', color: 'bg-white', shape: 'square', content: 'e' },
                { id: 'q', color: 'bg-gray-100', shape: 'square', content: '?' },
            ],
            options: [
                { id: 'opt1', color: 'bg-pink-200', shape: 'square', content: 'e' },
                { id: 'opt2', color: 'bg-pink-200', shape: 'square', content: 'E' },
                { id: 'opt3', color: 'bg-white', shape: 'square', content: 'E' },
            ]
        },
        {
            id: 't3',
            correctOptionId: 'opt3',
            sequence: [
                { id: '1', color: 'bg-orange-200', shape: 'square', content: 'F' },
                { id: '2', color: 'bg-white', shape: 'square', content: 'o' },
                { id: '3', color: 'bg-orange-200', shape: 'square', content: 'F' },
                { id: '4', color: 'bg-white', shape: 'square', content: 'o' },
                { id: 'q', color: 'bg-gray-100', shape: 'square', content: '?' },
            ],
            options: [
                { id: 'opt1', color: 'bg-white', shape: 'square', content: 'F' },
                { id: 'opt2', color: 'bg-orange-200', shape: 'square', content: 'o' },
                { id: 'opt3', color: 'bg-orange-200', shape: 'square', content: 'F' },
            ]
        },
        {
            id: 't4',
            correctOptionId: 'opt2',
            sequence: [
                { id: '1', color: 'bg-purple-200', shape: 'square', content: 'M' },
                { id: '2', color: 'bg-white', shape: 'square', content: 'm' },
                { id: '3', color: 'bg-purple-200', shape: 'square', content: 'M' },
                { id: '4', color: 'bg-white', shape: 'square', content: 'm' },
                { id: 'q', color: 'bg-gray-100', shape: 'square', content: '?' },
            ],
            options: [
                { id: 'opt1', color: 'bg-white', shape: 'square', content: 'm' },
                { id: 'opt2', color: 'bg-purple-200', shape: 'square', content: 'M' },
                { id: 'opt3', color: 'bg-green-200', shape: 'square', content: 'M' },
            ]
        }
    ]
  },
  {
    id: 5,
    type: GameType.SELECTION,
    title: "Tamaños",
    instruction: "Selecciona los globos según su tamaño.",
    selectionTasks: [
        {
            id: 't1',
            instructionOverride: "Selecciona los globos grandes.",
            items: [
                { id: '1', icon: 'balloon', color: 'text-red-500', isCorrect: false, scale: 0.8 },
                { id: '2', icon: 'balloon', color: 'text-green-500', isCorrect: false, scale: 0.5 },
                { id: '3', icon: 'balloon', color: 'text-blue-500', isCorrect: true, scale: 1.5 },
                { id: '4', icon: 'balloon', color: 'text-yellow-500', isCorrect: false, scale: 1.0 },
                { id: '5', icon: 'balloon', color: 'text-pink-500', isCorrect: true, scale: 1.5 },
            ]
        },
        {
            id: 't2',
            instructionOverride: "Selecciona los globos pequeños.",
            items: [
                { id: '1', icon: 'balloon', color: 'text-red-500', isCorrect: true, scale: 0.5 },
                { id: '2', icon: 'balloon', color: 'text-green-500', isCorrect: true, scale: 0.6 },
                { id: '3', icon: 'balloon', color: 'text-blue-500', isCorrect: false, scale: 1.5 },
                { id: '4', icon: 'balloon', color: 'text-yellow-500', isCorrect: false, scale: 1.2 },
            ]
        },
        {
            id: 't3',
            instructionOverride: "Selecciona las estrellas grandes.",
            items: [
                { id: '1', icon: 'star', color: 'text-yellow-400', isCorrect: true, scale: 1.5 },
                { id: '2', icon: 'star', color: 'text-yellow-400', isCorrect: false, scale: 0.7 },
                { id: '3', icon: 'star', color: 'text-yellow-400', isCorrect: false, scale: 0.6 },
                { id: '4', icon: 'star', color: 'text-yellow-400', isCorrect: true, scale: 1.5 },
            ]
        },
        {
            id: 't4',
            instructionOverride: "Selecciona los círculos medianos.",
            items: [
                { id: '1', icon: 'circle', color: 'text-blue-400', isCorrect: true, scale: 1.0 },
                { id: '2', icon: 'circle', color: 'text-blue-400', isCorrect: false, scale: 0.5 },
                { id: '3', icon: 'circle', color: 'text-blue-400', isCorrect: false, scale: 1.6 },
                { id: '4', icon: 'circle', color: 'text-blue-400', isCorrect: true, scale: 1.0 },
            ]
        }
    ]
  },
  {
    id: 6,
    type: GameType.PATTERN,
    title: "Formas Geométricas",
    instruction: "Copia la serie de formas.",
    patternTasks: [
        {
            id: 't1',
            correctOptionId: 'opt2',
            sequence: [
                { id: '1', color: 'bg-transparent', shape: 'diamond' },
                { id: '2', color: 'bg-transparent', shape: 'diamond' },
                { id: '3', color: 'bg-transparent', shape: 'diamond' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' }, 
            ],
            options: [
                { id: 'opt1', color: 'bg-transparent', shape: 'circle' },
                { id: 'opt2', color: 'bg-transparent', shape: 'diamond' },
                { id: 'opt3', color: 'bg-transparent', shape: 'star' },
            ]
        },
        {
            id: 't2',
            correctOptionId: 'opt1',
            sequence: [
                { id: '1', color: 'text-blue-500', shape: 'cross' },
                { id: '2', color: 'text-green-500', shape: 'plus' },
                { id: '3', color: 'text-blue-500', shape: 'cross' },
                { id: '4', color: 'text-green-500', shape: 'plus' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' }, 
            ],
            options: [
                { id: 'opt1', color: 'text-blue-500', shape: 'cross' },
                { id: 'opt2', color: 'text-green-500', shape: 'plus' },
                { id: 'opt3', color: 'text-blue-500', shape: 'plus' },
            ]
        },
        {
            id: 't3',
            correctOptionId: 'opt3',
            sequence: [
                { id: '1', color: 'text-purple-500', shape: 'hexagon' },
                { id: '2', color: 'text-yellow-500', shape: 'star' },
                { id: '3', color: 'text-purple-500', shape: 'hexagon' },
                { id: '4', color: 'text-yellow-500', shape: 'star' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' }, 
            ],
            options: [
                { id: 'opt1', color: 'text-purple-500', shape: 'star' },
                { id: 'opt2', color: 'text-yellow-500', shape: 'hexagon' },
                { id: 'opt3', color: 'text-purple-500', shape: 'hexagon' },
            ]
        },
        {
            id: 't4',
            correctOptionId: 'opt2',
            sequence: [
                { id: '1', color: 'text-orange-500', shape: 'moon' },
                { id: '2', color: 'text-yellow-500', shape: 'sun' },
                { id: '3', color: 'text-orange-500', shape: 'moon' },
                { id: '4', color: 'text-yellow-500', shape: 'sun' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' }, 
            ],
            options: [
                { id: 'opt1', color: 'text-yellow-500', shape: 'sun' },
                { id: 'opt2', color: 'text-orange-500', shape: 'moon' },
                { id: 'opt3', color: 'text-blue-500', shape: 'star' },
            ]
        }
    ]
  },
  {
    id: 7,
    type: GameType.PATTERN,
    title: "Copia la Serie",
    instruction: "Copia la serie según el modelo.",
    patternTasks: [
        {
            id: 't1',
            correctOptionId: 'opt2',
            sequence: [
                { id: '1', color: 'text-blue-500', shape: 'diagonal' },
                { id: '2', color: 'text-blue-500', shape: 'dash' },
                { id: '3', color: 'text-blue-500', shape: 'diagonal' },
                { id: '4', color: 'text-blue-500', shape: 'dash' },
                { id: '5', color: 'text-blue-500', shape: 'diagonal' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' }, 
            ],
            options: [
                { id: 'opt1', color: 'text-blue-500', shape: 'diagonal' },
                { id: 'opt2', color: 'text-blue-500', shape: 'dash' },
                { id: 'opt3', color: 'text-blue-500', shape: 'square' },
            ]
        },
        {
            id: 't2',
            correctOptionId: 'opt3',
            sequence: [
                { id: '1', color: 'text-green-500', shape: 'diagonal' },
                { id: '2', color: 'text-orange-500', shape: 'dash' },
                { id: '3', color: 'text-green-500', shape: 'diagonal' },
                { id: '4', color: 'text-orange-500', shape: 'dash' },
                { id: '5', color: 'text-green-500', shape: 'diagonal' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' }, 
            ],
            options: [
                { id: 'opt1', color: 'text-green-500', shape: 'dash' },
                { id: 'opt2', color: 'text-orange-500', shape: 'diagonal' },
                { id: 'opt3', color: 'text-orange-500', shape: 'dash' },
            ]
        },
        {
            id: 't3',
            correctOptionId: 'opt1',
            sequence: [
                { id: '1', color: 'text-red-500', shape: 'dash' },
                { id: '2', color: 'text-red-500', shape: 'dash' },
                { id: '3', color: 'text-red-500', shape: 'diagonal' },
                { id: '4', color: 'text-red-500', shape: 'dash' },
                { id: '5', color: 'text-red-500', shape: 'dash' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' }, 
            ],
            options: [
                { id: 'opt1', color: 'text-red-500', shape: 'diagonal' },
                { id: 'opt2', color: 'text-red-500', shape: 'dash' },
                { id: 'opt3', color: 'text-blue-500', shape: 'diagonal' },
            ]
        },
        {
            id: 't4',
            correctOptionId: 'opt1',
            sequence: [
                { id: '1', color: 'text-purple-500', shape: 'diagonal' },
                { id: '2', color: 'text-purple-500', shape: 'diagonal' },
                { id: '3', color: 'text-purple-500', shape: 'dash' },
                { id: '4', color: 'text-purple-500', shape: 'diagonal' },
                { id: '5', color: 'text-purple-500', shape: 'diagonal' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' }, 
            ],
            options: [
                { id: 'opt1', color: 'text-purple-500', shape: 'dash' },
                { id: 'opt2', color: 'text-purple-500', shape: 'diagonal' },
                { id: 'opt3', color: 'text-purple-500', shape: 'square' },
            ]
        }
    ]
  },
  {
    id: 8,
    type: GameType.PATTERN,
    title: "Botones e Hilos",
    instruction: "Copia la serie de botones.",
    patternTasks: [
        {
            id: 't1',
            correctOptionId: 'opt2', // Up Down Up Down -> Up
            sequence: [
                { id: '1', color: 'text-pink-500', shape: 'button-round-up' },
                { id: '2', color: 'text-pink-500', shape: 'button-round-down' },
                { id: '3', color: 'text-pink-500', shape: 'button-round-up' },
                { id: '4', color: 'text-pink-500', shape: 'button-round-down' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' },
            ],
            options: [
                { id: 'opt1', color: 'text-pink-500', shape: 'button-round-down' },
                { id: 'opt2', color: 'text-pink-500', shape: 'button-round-up' },
                { id: 'opt3', color: 'text-pink-500', shape: 'button-round' },
            ]
        },
        {
             id: 't2',
             correctOptionId: 'opt1',
             sequence: [
                { id: '1', color: 'text-blue-500', shape: 'button-oval' },
                { id: '2', color: 'text-green-500', shape: 'button-square' },
                { id: '3', color: 'text-blue-500', shape: 'button-oval' },
                { id: '4', color: 'text-green-500', shape: 'button-square' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' },
             ],
             options: [
                { id: 'opt1', color: 'text-blue-500', shape: 'button-oval' },
                { id: 'opt2', color: 'text-green-500', shape: 'button-square' },
                { id: 'opt3', color: 'text-blue-500', shape: 'button-round' },
             ]
        },
        {
             id: 't3',
             correctOptionId: 'opt2', // Up Up Down Up Up -> Down
             sequence: [
                { id: '1', color: 'text-green-500', shape: 'button-round-up' },
                { id: '2', color: 'text-green-500', shape: 'button-round-up' },
                { id: '3', color: 'text-green-500', shape: 'button-round-down' },
                { id: '4', color: 'text-green-500', shape: 'button-round-up' },
                { id: '5', color: 'text-green-500', shape: 'button-round-up' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' },
             ],
             options: [
                { id: 'opt1', color: 'text-green-500', shape: 'button-round-up' },
                { id: 'opt2', color: 'text-green-500', shape: 'button-round-down' },
                { id: 'opt3', color: 'text-green-500', shape: 'button-square' },
             ]
        },
        {
             id: 't4',
             correctOptionId: 'opt2', 
             sequence: [
                { id: '1', color: 'text-orange-500', shape: 'button-square' },
                { id: '2', color: 'text-orange-500', shape: 'button-square' },
                { id: '3', color: 'text-blue-500', shape: 'button-round' },
                { id: '4', color: 'text-orange-500', shape: 'button-square' },
                { id: '5', color: 'text-orange-500', shape: 'button-square' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' },
             ],
             options: [
                { id: 'opt1', color: 'text-orange-500', shape: 'button-square' },
                { id: 'opt2', color: 'text-blue-500', shape: 'button-round' },
                { id: 'opt3', color: 'text-blue-500', shape: 'button-oval' },
             ]
        }
    ]
  },
  {
    id: 9,
    type: GameType.PATTERN,
    title: "Puntos y Flechas",
    instruction: "Copia la serie según el modelo.",
    patternTasks: [
        {
            id: 't1',
            correctOptionId: 'opt1',
            sequence: [
                { id: '1', color: 'text-pink-500', shape: 'square-dot' },
                { id: '2', color: 'text-blue-500', shape: 'square-arrow' },
                { id: '3', color: 'text-pink-500', shape: 'square-dot' },
                { id: '4', color: 'text-blue-500', shape: 'square-arrow' },
                { id: 'q', color: 'bg-gray-100', shape: 'square' },
            ],
            options: [
                { id: 'opt1', color: 'text-pink-500', shape: 'square-dot' },
                { id: 'opt2', color: 'text-blue-500', shape: 'square-arrow' },
                { id: 'opt3', color: 'text-gray-400', shape: 'square' },
            ]
        },
        {
             id: 't2',
             correctOptionId: 'opt2',
             sequence: [
                 { id: '1', color: 'text-orange-500', shape: 'square-arrow' },
                 { id: '2', color: 'text-purple-500', shape: 'square-dot' },
                 { id: '3', color: 'text-orange-500', shape: 'square-arrow' },
                 { id: '4', color: 'text-purple-500', shape: 'square-dot' },
                 { id: 'q', color: 'bg-gray-100', shape: 'square' },
             ],
             options: [
                 { id: 'opt1', color: 'text-purple-500', shape: 'square-dot' },
                 { id: 'opt2', color: 'text-orange-500', shape: 'square-arrow' },
                 { id: 'opt3', color: 'text-orange-500', shape: 'square' },
             ]
        },
        {
             id: 't3',
             correctOptionId: 'opt1',
             sequence: [
                 { id: '1', color: 'text-green-500', shape: 'square-arrow' },
                 { id: '2', color: 'text-green-500', shape: 'square-arrow' },
                 { id: '3', color: 'text-red-500', shape: 'square-dot' },
                 { id: '4', color: 'text-green-500', shape: 'square-arrow' },
                 { id: '5', color: 'text-green-500', shape: 'square-arrow' },
                 { id: 'q', color: 'bg-gray-100', shape: 'square' },
             ],
             options: [
                 { id: 'opt1', color: 'text-red-500', shape: 'square-dot' },
                 { id: 'opt2', color: 'text-green-500', shape: 'square-arrow' },
                 { id: 'opt3', color: 'text-blue-500', shape: 'square-dot' },
             ]
        },
        {
             id: 't4',
             correctOptionId: 'opt2',
             sequence: [
                 { id: '1', color: 'text-blue-500', shape: 'square-dot' },
                 { id: '2', color: 'text-yellow-500', shape: 'square-dot' },
                 { id: '3', color: 'text-blue-500', shape: 'square-dot' },
                 { id: '4', color: 'text-yellow-500', shape: 'square-dot' },
                 { id: 'q', color: 'bg-gray-100', shape: 'square' },
             ],
             options: [
                 { id: 'opt1', color: 'text-blue-500', shape: 'square-dot' },
                 { id: 'opt2', color: 'text-blue-500', shape: 'square-dot' },
                 { id: 'opt3', color: 'text-yellow-500', shape: 'square-arrow' },
             ]
        }
    ]
  },
  {
    id: 10,
    type: GameType.GRID_COPY,
    title: "Copia el Patrón",
    instruction: "Copia el patrón que se muestra arriba. ¡Solo es una línea!",
    gridCopyTasks: [
        {
            id: 'g1',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja una línea horizontal",
            targetLines: [
                { start: {r: 3, c: 3}, end: {r: 3, c: 4} }
            ]
        },
        {
            id: 'g2',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja una línea vertical",
            targetLines: [
                { start: {r: 2, c: 4}, end: {r: 3, c: 4} }
            ]
        },
        {
            id: 'g3',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja una línea diagonal",
            targetLines: [
                { start: {r: 2, c: 2}, end: {r: 3, c: 3} }
            ]
        },
        {
            id: 'g4',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja una línea más larga",
            targetLines: [
                { start: {r: 4, c: 2}, end: {r: 4, c: 5} }
            ]
        }
    ]
  },
  {
    id: 11,
    type: GameType.GRID_COPY,
    title: "Figuras en la Cuadrícula",
    instruction: "Copia la figura geométrica en la cuadrícula de abajo.",
    gridCopyTasks: [
        {
            id: 'g1',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja un cuadrado",
            targetLines: [
                { start: {r: 2, c: 2}, end: {r: 2, c: 5} },
                { start: {r: 2, c: 5}, end: {r: 5, c: 5} },
                { start: {r: 5, c: 5}, end: {r: 5, c: 2} },
                { start: {r: 5, c: 2}, end: {r: 2, c: 2} }
            ]
        },
        {
            id: 'g2',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja un triángulo",
            targetLines: [
                { start: {r: 2, c: 4}, end: {r: 6, c: 2} },
                { start: {r: 6, c: 2}, end: {r: 6, c: 6} },
                { start: {r: 6, c: 6}, end: {r: 2, c: 4} }
            ]
        },
        {
            id: 'g3',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja un rectángulo",
            targetLines: [
                { start: {r: 3, c: 1}, end: {r: 3, c: 6} },
                { start: {r: 3, c: 6}, end: {r: 5, c: 6} },
                { start: {r: 5, c: 6}, end: {r: 5, c: 1} },
                { start: {r: 5, c: 1}, end: {r: 3, c: 1} }
            ]
        },
        {
            id: 'g4',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja un rombo",
            targetLines: [
                { start: {r: 1, c: 4}, end: {r: 4, c: 7} },
                { start: {r: 4, c: 7}, end: {r: 7, c: 4} },
                { start: {r: 7, c: 4}, end: {r: 4, c: 1} },
                { start: {r: 4, c: 1}, end: {r: 1, c: 4} }
            ]
        }
    ]
  },
  {
    id: 12,
    type: GameType.GRID_COPY,
    title: "Dibuja las Formas",
    instruction: "Copia el dibujo en la cuadrícula de abajo.",
    gridCopyTasks: [
        {
            id: 'g1',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja una cruz",
            targetLines: [
                { start: {r: 2, c: 2}, end: {r: 6, c: 6} },
                { start: {r: 2, c: 6}, end: {r: 6, c: 2} }
            ]
        },
        {
            id: 'g2',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja un cuadrado pequeño",
            targetLines: [
                { start: {r: 3, c: 3}, end: {r: 3, c: 5} },
                { start: {r: 3, c: 5}, end: {r: 5, c: 5} },
                { start: {r: 5, c: 5}, end: {r: 5, c: 3} },
                { start: {r: 5, c: 3}, end: {r: 3, c: 3} }
            ]
        },
        {
            id: 'g3',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja un cuadrado con cruz",
            targetLines: [
                // Outer box
                { start: {r: 1, c: 1}, end: {r: 1, c: 7} },
                { start: {r: 1, c: 7}, end: {r: 7, c: 7} },
                { start: {r: 7, c: 7}, end: {r: 7, c: 1} },
                { start: {r: 7, c: 1}, end: {r: 1, c: 1} },
                // X
                { start: {r: 1, c: 1}, end: {r: 7, c: 7} },
                { start: {r: 1, c: 7}, end: {r: 7, c: 1} }
            ]
        },
        {
            id: 'g4',
            rows: 8,
            cols: 8,
            instructionOverride: "Dibuja un cuadrado con centro",
            targetLines: [
                // Outer box
                { start: {r: 1, c: 1}, end: {r: 1, c: 7} },
                { start: {r: 1, c: 7}, end: {r: 7, c: 7} },
                { start: {r: 7, c: 7}, end: {r: 7, c: 1} },
                { start: {r: 7, c: 1}, end: {r: 1, c: 1} },
                // Inner box
                { start: {r: 3, c: 3}, end: {r: 3, c: 5} },
                { start: {r: 3, c: 5}, end: {r: 5, c: 5} },
                { start: {r: 5, c: 5}, end: {r: 5, c: 3} },
                { start: {r: 5, c: 3}, end: {r: 3, c: 3} }
            ]
        }
    ]
  }
];
