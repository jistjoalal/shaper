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
  const s = document.getElementsByName("shape");
  s[0].checked = true;
  for (let shape of s) {
    shape.addEventListener("change", e => {
      state.shapeSelect = e.target.id;
      previewShape();
    });
  }

  // color input
  const colorInput = document.querySelector(".controls__color");
  colorInput.addEventListener("click", e => {
    const { top, bottom, left, right } = colorInput.getBoundingClientRect();
    const xScale = 360 / (right - left);
    const yScale = 100 / (bottom - top);
    const x = (e.clientX - left) * xScale;
    const y = (e.clientY - top) * yScale;
    state.colorSelect = `hsla(${x}, 100%, ${y}%, 1)`;
    previewShape();
  });

  // clear button
  const clearBtn = document.querySelector("#clear");
  clearBtn.addEventListener("click", e => {
    if (!confirm("Clear the canvas?")) return;
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
