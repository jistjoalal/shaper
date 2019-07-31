import { createShape } from "./shapes/index.js";

export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

export function initCanvas() {
  canvas.width = 1000;
  canvas.height = 500;
  canvas.addEventListener("click", handleClick);
}

function handleClick(e) {
  const rect = canvas.getBoundingClientRect();
  const { width, height, clientWidth, clientHeight } = canvas;
  const xScale = width / clientWidth;
  const yScale = height / clientHeight;
  const mouseX = ~~((e.clientX - rect.left) * xScale);
  const mouseY = ~~((e.clientY - rect.top) * yScale);

  createShape(mouseX, mouseY);
}
