import { state } from "../state.js";
import { Shape } from "./Shape.js";

export class Rect extends Shape {
  constructor(props) {
    super(props);
    const { mouseX, mouseY } = props;
    const { shapeWidth, shapeHeight } = state;
    this.specs = [
      mouseX - shapeWidth / 2,
      mouseY - shapeHeight / 2,
      shapeWidth,
      shapeHeight
    ];
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(...this.specs);
  }
}
