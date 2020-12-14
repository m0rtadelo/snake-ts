import { Point } from '../utils/point';
import { Movement } from '../constants/keyboard';
import { HEIGHT, WIDTH } from '../constants/game';
import { Fruit } from './fruit';

export class Snake {
  position: Point;
  body: Point[];
  points = 0;
  movement: Movement;
  private size = 0;

  constructor(size: number) {
    this.reset(size);
  }

  get head(): Point {
    return this.body[this.body.length -1]
  }

  reset(size: number): void {
    this.position = new Point(WIDTH / 2, HEIGHT / 2);
    this.movement = Movement.Right;
    this.body = new Array();
    this.size = size;
    this.points = 0;
  }

  move() : void {
    const add = (value: number, point: number) => point + value;
    this.position.x = add(this.movement === Movement.Right ? 1 : this.movement === Movement.Left ? -1 : 0, this.position.x);
    this.position.y = add(this.movement === Movement.Down ? 1 : this.movement === Movement.Up ? -1 : 0, this.position.y);
    this.body.push(new Point(this.position.x, this.position.y))
    if(this.body.length > this.size) {
      this.body = this.body.splice(1)
    }
  }

  isDead(): boolean {
    for(let i = 0; i < this.body.length - 1; i++) {
      if(this.head.in(this.body[i]) || this.head.x < 0 || this.head.x >= WIDTH || this.head.y < 0 || this.head.y >= HEIGHT) {
        return true;
      }
    }

    return false;
  }

  eat(fruit: Fruit): void {
    fruit.spawn(this.body);
    this.points++;
    this.size = this.size + this.points;
  }
}