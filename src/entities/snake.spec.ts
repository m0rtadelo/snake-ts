import { expect } from 'chai';
import { Movement } from '../constants/keyboard';
import { Fruit } from './fruit';
import { Snake } from './snake';

const size = 3;

describe('Snake', () => {
  const snake = new Snake(size);

  it('should load correctly', () => {
    expect(snake).to.not.be.undefined;
    expect(snake.movement === Movement.Right).to.be.true;
  })

  it('should move correctly', () => {
    const actualPosition = {
      x: snake.position.x,
      y: snake.position.y
    }
    expect(snake.position.x === actualPosition.x).to.be.true;
    expect(snake.position.y === actualPosition.y).to.be.true;
    snake.move();
    expect(snake.position.x === actualPosition.x).to.be.false;
  })

  it('should get head correctly', () => {
    snake.move();
    snake.move();
    expect(snake.head === snake.body[snake.body.length -1]).to.be.true;
  })

  it('should mantain snake size', () => {
    snake.move();
    expect(snake.body.length === size).to.be.true;
  })

  it('should increase size if eat fruit', () => {
    expect(snake.body.length === size).to.be.true;
    snake.eat(new Fruit());
    snake.move();
    expect(snake.body.length === size + 1).to.be.true;
  })

  it('should detect dead correctly', () => {
    expect(snake.isDead()).to.be.false;
    snake.movement = Movement.Left;
    snake.move();
    expect(snake.isDead()).to.be.true;
  })
})
