import { expect } from 'chai';
import { Fruit } from "./fruit";
import { Point } from "../utils/point";

describe('Fruit', () => {
  const fruit = new Fruit({width: 64, height: 36});

  it('should load', () => {
    expect(fruit).to.not.be.undefined;
  })

  it('should spawn correctly', () => {
    fruit.spawn();
    expect(fruit.position.x > -1 ).to.be.true;
    expect(fruit.position.y > -1).to.be.true;
  })

  it('should avoid body', () => {
    const body = []
    body.push(new Point(5, 5));
    fruit.spawn(body);
    expect(fruit.position.in(body[0])).to.be.false;
  })
})
