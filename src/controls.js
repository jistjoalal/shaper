import { state } from "./state.js";
import { canvas, ctx } from "./canvas.js";
import { previewShape } from "./preview.js";

export function initControls() {
  // size input
  const widthInput = document.querySelector("#width");
  widthInput.value = state.shapeWidth;
  widthInput.addEventListener("change", e => {
    state.shapeWidth = e.target.value;
    previewShape();
  });

  const heightInput = document.querySelector("#height");
  heightInput.value = state.shapeHeight;
  heightInput.addEventListener("change", e => {
    state.shapeHeight = e.target.value;
    previewShape();
  });

  // shape input
  const shapeInput = document.querySelector("#shape");
  shapeInput.value = state.shapeSelect;
  shapeInput.addEventListener("change", e => {
    state.shapeSelect = e.target.value;
    previewShape();
  });

  // color input
  const colorInput = document.querySelector("#color");
  ctx.fillStyle = colorInput.value = state.colorSelect;
  colorInput.addEventListener("change", e => {
    state.colorSelect = e.target.value;
    previewShape();
  });

  // clear button
  const clearBtn = document.querySelector("#clear");
  clearBtn.addEventListener("click", e => {
    const { shapes } = state;
    // clear shapes list
    shapes.clear();
    state.shapeCount = 0;
    const shapeList = document.querySelectorAll("#shapes > li");
    for (let shape of shapeList) {
      shape.parentElement.removeChild(shape);
    }
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}
