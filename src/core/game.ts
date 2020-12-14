import { Status, VALID_MOVEMENTS } from '../constants/game';
import { Renderer } from '../interfaces/renderer';
import { Snake } from '../entities/snake';
import { Fruit } from '../entities/fruit';
import { InputMethod } from '../interfaces/controller';
import { Movement } from '../constants/keyboard';

export class Game {
  _status: Status;
  best: number;
  private speed: number;
  snake: Snake;
  fruit: Fruit;
  private readonly render: Renderer;

  constructor(speed: number, render: Renderer, input?: InputMethod) {
    this._status = Status.menu;
    this.best = -1;
    this.speed = speed;
    this.render = render;
    this.snake = new Snake(25);
    this.fruit = new Fruit();
    this.setInput(input);
  }

  get status() { return this._status }
  start() : void {
    setInterval(() => {
      if (this._status === Status.playing) {
        this.snake.move();
        this.checkCollisions();
      }
      this.render.render(this);
    }, this.speed);
  }

  private setInput(input?: InputMethod) {
    if(input) {
      input.event.addEventListener('input', (data) => {
        this.snake.movement = VALID_MOVEMENTS.includes((data as any).detail)
          ? (data as any).detail
          : this.snake.movement;
        if (this._status === Status.menu && (data as any).detail === Movement.Enter) {
          this.snake.reset(25);
          this.fruit.spawn();
          this._status = Status.playing;
        } else if (this._status !== Status.menu && (data as any).detail === Movement.Escape) {
          this._status = this._status === Status.paused ? Status.playing : Status.paused;
        }
      });
    }
  }

  private reset(): void {
    this.best = this.snake.points > this.best ? this.snake.points : this.best;
    this._status = Status.menu;
  }

  private checkCollisions(): void {
    if(this.snake.isDead()) {
      this.reset()
    } else if (this.snake.head.in(this.fruit.position)) {
      this.snake.eat(this.fruit);
    }
  }
}
