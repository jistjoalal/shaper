import { state } from "../state.js";
import { removeShape } from "./index.js";

export class Shape {
  constructor() {
    const { colorSelect, shapes, shapeCount } = state;
    this.color = colorSelect;
    this.id = shapeCount;

    // add to state
    shapes.set(this.id, this);
    state.shapeCount++;

    // add to list on page
    const item = document.createElement("li");
    item.id = `shape-${this.id}`;

    const text = document.createTextNode(`shape ${this.id}`);
    item.appendChild(text);

    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", removeShape(this.id));
    item.appendChild(btn);

    document.querySelector("#shapes").appendChild(item);
  }
}
