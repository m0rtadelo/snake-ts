// https://stackoverflow.com/questions/35778661/mocha-and-chai-test-fails-when-testing-function-with-setinterval
import { expect } from 'chai';
// import { Event, EventTarget } from 'shelving-mock-event';
import { InputMethod } from '../interfaces/controller';
import { Renderer } from '../interfaces/renderer';
import { Game } from './game';
const sinon = require('sinon');
/*
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = new JSDOM(`<body>
<div class="holder">
  <span class="text-left">Points: <span id="points"></span></span>
  <span class="title">Snake</span>
  <span class="text-right">Best: <span id="best"></span></span>
  <canvas id="canvas" width="960px" height="540px"></canvas>
  <span id="paused" class="hidden">GAME PAUSED<br>press ESC key to continue</span>
  <span id="menu" class="hidden">Press ENTER to start a new game</span>
</div>
</body>`).window;

global.document = document;
*/ 


class FakeKeyboard implements InputMethod {
  event: EventTarget;
  constructor() {
    this.event = new EventTarget()
  }
  emit (key: string) {
    this.event.dispatchEvent(new CustomEvent('input', { detail: key }))
  }
}
class FakeCanvas implements Renderer {
  render (game:Game):void { }
}

// tslint:disable: no-unused-expression
describe('Game', () => {

  let clock: { tick: (arg0: number) => void; };
  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock = sinon.restore();
  });

  it('should load', () => {
    const game = new Game({speed:100, width: 64, height: 36}, new FakeCanvas());
    expect(game).to.not.be.undefined;
  })

  it('should not move in menu', () => {
    const game = new Game({speed:100, width: 64, height: 36}, new FakeCanvas());
    game.start();
    clock.tick(101);
    const x = game.snake.position.x;
    clock.tick(101);
    expect(game.snake.position.x === x).to.be.true;
  })
/*
  it('should move when playing', () => {
    const kbr = new FakeKeyboard();
    const game = new Game(100, new FakeCanvas(), kbr);
    game.start();
    kbr.emit('ok')
    clock.tick(101);
    const x = game.snake.position.x;
    clock.tick(101);
    expect(game.snake.position.x > x).to.be.true;
  })
  */
})