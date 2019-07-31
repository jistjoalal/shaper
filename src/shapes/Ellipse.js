import { state } from "../state.js";
import { ctx } from "../canvas.js";
import { Shape } from "./Shape.js";

export class Ellipse extends Shape {
  constructor(mouseX, mouseY) {
    super();
    const { shapeWidth, shapeHeight } = state;
    this.specs = [
      mouseX,
      mouseY,
      shapeWidth / 2,
      shapeHeight / 2,
      0,
      0,
      2 * Math.PI
    ];
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.ellipse(...this.specs);
    ctx.fill();
    ctx.closePath();
  }
}
