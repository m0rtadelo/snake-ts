import { COLOR } from "../constants/color";
import { Status } from "../constants/game";
import { Fruit } from "../entities/fruit";
import { Game } from "../core/game";
import { Snake } from "../entities/snake";
import { Renderer } from "../interfaces/renderer";

export class Canvas implements Renderer {
  private readonly pointDOM: HTMLElement;
  private readonly bestDOM: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly chunk: number;

  constructor(width: number) {
    document.getElementById('game').innerHTML = `    <div class="holder">
    <span class="text-left">Points: <span id="points"></span></span>
    <span class="title">Snake</span>
    <span class="text-right">Best: <span id="best"></span></span>
    <canvas id="canvas" width="960px" height="540px"></canvas>
    <span id="paused" class="hidden">GAME PAUSED<br>press ESC key to continue</span>
    <span id="menu" class="hidden">Press ENTER to start a new game</span>
  </div>
`
    this.pointDOM = document.getElementById('points');
    this.bestDOM = document.getElementById('best');
    this.canvas = (document.getElementById('canvas') as HTMLCanvasElement);
    this.ctx = this.canvas.getContext('2d');
    this.chunk = this.canvas.width / width;
  }
  render(game: Game): void {
    document.getElementById('paused').className = game._status === Status.paused ? 'paused' : 'hidden'
    document.getElementById('menu').className = game._status === Status.menu ? 'paused' : 'hidden'
    if(game.best >= 0) {
      document.getElementById('menu').innerHTML = 'Points: ' + game.snake.points + ' (Best: ' + game.best + ')<br>Press ENTER to start a new game'
    }
    this.pointDOM.innerText = (game.snake.points || '0').toString()
    this.bestDOM.innerText = (game.best <0 ? '0' : game.best).toString()
    this.renderBack();
    if (game._status === Status.playing) {
      this.renderFruit(game.fruit);
      this.renderSnake(game.snake);
    }
  }

  private renderBack(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.beginPath();
    this.ctx.fillStyle = COLOR.green
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  private renderFruit(fruit: Fruit): void {
    this.ctx.fillStyle = COLOR.red
    this.ctx.strokeStyle = COLOR.darkred
    this.ctx.arc(fruit.position.x * this.chunk + this.chunk / 2, fruit.position.y * this.chunk + this.chunk / 2, this.chunk / 3, 0, 2 * Math.PI, false)
    this.ctx.fill()
  }

  private renderSnake(snake: Snake): void {
    snake.body.forEach((coordenate) => {
      this.ctx.fillStyle = COLOR.yellow
      this.ctx.fillRect(coordenate.x * this.chunk, coordenate.y * this.chunk, this.chunk, this.chunk)
      this.ctx.stroke()
    })
  }
}