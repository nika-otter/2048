import { createElement } from "react";
import ReactDOM from "react-dom/client";

export class Cell {
  constructor(gridElement, x, y) {
    const cell = createElement("div", { className: "cell" });
    ReactDOM.createPortal(cell, gridElement);
    this.x = x;
    this.y = y;
  }
}
