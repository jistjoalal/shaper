import { state } from "../state.js";
import { canvas, ctx } from "../canvas.js";
import { Ellipse } from "./Ellipse.js";
import { Rect } from "./Rect.js";

export const SHAPE_TYPES = {
  ellipse: Ellipse,
  rect: Rect
};

export function createShape(mouseX, mouseY) {
  // draw shape
  const Type = SHAPE_TYPES[state.shapeSelect];

  const shape = new Type({ mouseX, mouseY, draw: true });
  shape.draw(ctx);
}

export function removeShape(id) {
  return e => {
    const { shapes } = state;
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // remove shape
    const listItem = document.querySelector(`#shape-${id}`);
    listItem.parentElement.removeChild(listItem);
    shapes.delete(id);

    // re-draw the rest
    for (let shape of shapes.values()) {
      shape.draw(ctx);
    }
  };
}
