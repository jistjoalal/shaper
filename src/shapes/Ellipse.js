import { state } from "../state.js";
import { Shape } from "./Shape.js";

export class Ellipse extends Shape {
  constructor(props) {
    super(props);
    const { mouseX, mouseY } = props;
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
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.ellipse(...this.specs);
    ctx.fill();
    ctx.closePath();
  }
}
