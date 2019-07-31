import { state } from "./state.js";
import { ctx } from "./canvas.js";

export function initControls() {
  // size input
  const widthInput = document.querySelector("#width");
  widthInput.value = state.shapeWidth;
  widthInput.addEventListener(
    "change",
    e => (state.shapeWidth = e.target.value)
  );

  const heightInput = document.querySelector("#height");
  heightInput.value = state.shapeHeight;
  heightInput.addEventListener(
    "change",
    e => (state.shapeHeight = e.target.value)
  );

  // shape input
  const shapeInput = document.querySelector("#shape");
  shapeInput.value = state.shapeSelect;
  shapeInput.addEventListener("change", e => {
    state.shapeSelect = e.target.value;
  });

  // color input
  const colorInput = document.querySelector("#color");
  ctx.fillStyle = colorInput.value = state.colorSelect;
  colorInput.addEventListener("change", e => {
    state.colorSelect = e.target.value;
  });
}
