import { Size } from '../interfaces/size';
import { Point } from '../utils/point';

export class Fruit {

  position: Point = new Point(0, 0);
  private w: number;
  private h: number;
  constructor(options: Size) {
    this.w = options.width;
    this.h = options.height;
    this.spawn();
  }

  spawn(avoid?: Point[]): void {
    do {
      this.position.x = Math.floor(Math.random() * this.w);
      this.position.y = Math.floor(Math.random() * this.h);
    } while (avoid && avoid.some(item => item.in(this.position)))
  }
}