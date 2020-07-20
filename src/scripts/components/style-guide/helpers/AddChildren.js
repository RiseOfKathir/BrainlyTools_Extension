// @flow strict

/* eslint-disable no-param-reassign */

import type { Icon, Button } from "@style-guide";

export type ChildrenParamType =
  | string
  | number
  | boolean
  | Text
  | Element
  | HTMLElement
  | DocumentFragment
  | Node
  | Icon
  | Button
  | { element: ChildrenParamType, ... }
  | ChildrenParamType[];

export default function AddChildren(
  target: HTMLElement | Element,
  _children?: ?ChildrenParamType,
) {
  let children = _children;

  if (!target || children === undefined || children === null) return;

  if (children instanceof Array) {
    if (children.length > 0)
      children.forEach((child: ChildrenParamType) =>
        AddChildren(target, child),
      );

    return;
  }

  if (
    typeof children !== "string" &&
    !(children instanceof Node) &&
    children &&
    children.element !== undefined &&
    children.element !== null
  )
    children = children.element;

  if (
    typeof children === "string" ||
    typeof children === "number" ||
    typeof children === "boolean"
  )
    target.insertAdjacentHTML("beforeend", String(children));
  else if (
    children instanceof Text ||
    children instanceof Element ||
    children instanceof HTMLElement ||
    children instanceof DocumentFragment ||
    children instanceof Node
  )
    target.append(children);
  else {
    console.error("Unsupported children", children);
  }
}
