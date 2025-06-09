// @ts-ignore
import { openMenu } from "../menu/menu";
import translateWidget from "../menu/translateWidget";
import template from "./widget.html";

export let $widget: HTMLElement;

export function renderWidget() {
  $widget = document.createElement("div");
  $widget.classList.add("asw-container");
  $widget.innerHTML = `${template}`;

  const $btn: HTMLElement = document.querySelector(".asw-menu-btn");
  // Object.assign($btn.style, getButtonStyle());

  $btn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    openMenu();
  });

  translateWidget();

  // const parent = getScriptDataAttribute("parent");

  // if (parent) {
  //   document.querySelector(parent)?.appendChild($widget);
  // } else {
  //   document.body.appendChild($widget);
  // }

  document.body.appendChild($widget);
  return $widget;
}
