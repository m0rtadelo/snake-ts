import { Game } from './core/game';
import { Canvas } from './views/canvas';
import { Keyboard } from './controllers/keyboard';
import { HEIGHT, WIDTH } from './constants/game';

new Game(
  {
    speed: 50,
    width: WIDTH,
    height: HEIGHT
  },
  new Canvas(WIDTH),
  new Keyboard()
).start();
