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
    ctx.ellipse(...this.specs);
    if (this.highlight) {
      ctx.strokeStyle = "red";
      ctx.stroke();
    } else {
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    ctx.closePath();
  }
}
