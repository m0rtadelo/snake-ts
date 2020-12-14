import { expect } from 'chai';
import { Point } from "./point";

describe('Point', () => {
  const point = new Point(5, 5);

  it('should load correctly', () => {
    expect(point.x === 5).to.be.true;
    expect(point.y === 5).to.be.true;
  })

  it('should detect collision correctly', () => {
    const body = new Point(5, 5);
    expect(point.in(body)).to.be.true;
    body.x++;
    expect(point.in(body)).to.be.false;
  })
})