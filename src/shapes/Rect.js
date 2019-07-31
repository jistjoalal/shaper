import { state } from "../state.js";
import { ctx } from "../canvas.js";
import { Shape } from "./Shape.js";

export class Rect extends Shape {
  constructor(mouseX, mouseY) {
    super();
    const { shapeWidth, shapeHeight } = state;
    this.specs = [
      mouseX - shapeWidth / 2,
      mouseY - shapeHeight / 2,
      shapeWidth,
      shapeHeight
    ];
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(...this.specs);
  }
}
