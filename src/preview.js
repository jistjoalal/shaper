import { SHAPE_TYPES } from "./shapes/index.js";
import { state } from "./state.js";

export const canvas = document.querySelector("#preview");
export const ctx = canvas.getContext("2d");

export function initPreview() {
  canvas.width = 200;
  canvas.height = 200;
  previewShape();
}

export function previewShape() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const Type = SHAPE_TYPES[state.shapeSelect];
  const shape = new Type({
    mouseX: canvas.width / 2,
    mouseY: canvas.height / 2,
    draw: false
  });
  shape.draw(ctx);
}
