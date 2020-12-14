import { HEIGHT, WIDTH } from '../constants/game';
import { Point } from '../utils/point';

export class Fruit {

  position: Point = new Point(0, 0);

  constructor() {
    this.spawn();
  }

  spawn(avoid?: Point[]): void {
    do {
      this.position.x = Math.floor(Math.random() * WIDTH);
      this.position.y = Math.floor(Math.random() * HEIGHT);
    } while (avoid && avoid.some(item => item.in(this.position)))
  }
}