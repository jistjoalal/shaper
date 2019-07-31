import { canvas, ctx } from "../canvas.js";
import { state } from "../state.js";
import { removeShape } from "./index.js";

export class Shape {
  constructor({ draw }) {
    const { colorSelect, shapes, shapeCount } = state;
    this.color = colorSelect;
    this.highlight = false;
    if (!draw) return;

    // add to state
    this.id = shapeCount;
    shapes.set(this.id, this);
    state.shapeCount++;

    // add to list on page
    const idStr = `shape-${this.id}`;
    const item = document.createElement("li");
    item.id = idStr;

    // shape preview
    const p = document.querySelector("#preview");
    const previewCanvas = document.createElement("canvas");
    previewCanvas.className = "shapes__preview";
    const previewCtx = previewCanvas.getContext("2d");
    previewCanvas.width = p.width;
    previewCanvas.height = p.height;
    previewCtx.drawImage(p, 0, 0);
    item.appendChild(previewCanvas);

    previewCanvas.addEventListener("mouseover", e => {
      const { shapes } = state;
      // clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // highlight shape
      this.highlight = true;

      // redraw shapes
      for (let shape of shapes.values()) {
        if (shape.id != this.id) {
          shape.draw(ctx);
        }
      }
      this.draw(ctx);
    });

    previewCanvas.addEventListener("mouseout", e => {
      const { shapes } = state;
      // clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // highlight shape
      this.highlight = false;

      // redraw shapes
      for (let shape of shapes.values()) {
        if (shape.id != this.id) {
          shape.draw(ctx);
        }
      }
      this.draw(ctx);
    });

    // delete
    previewCanvas.addEventListener("click", removeShape(this.id));

    document.querySelector("#shapes").appendChild(item);
  }
}
