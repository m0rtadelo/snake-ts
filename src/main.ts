import { Game } from './core/game';
import { Canvas } from './views/canvas';
import { Keyboard } from './controllers/keyboard';

new Game(50, new Canvas(), new Keyboard()).start();
