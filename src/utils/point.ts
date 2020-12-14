export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public in(point: Point): boolean {
    return point.x === this.x && point.y === this.y;
  }
}