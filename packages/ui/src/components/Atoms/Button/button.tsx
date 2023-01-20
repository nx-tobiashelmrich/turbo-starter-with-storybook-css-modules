import React from "react";
import { MouseEventHandler } from "react";
import cssExports from "./button.module.css";

interface ButtonProps {
  clickHandler: MouseEventHandler;
  children: any;
  design?: string;
}

export function Button({ clickHandler, children, design }: ButtonProps) {
  return (
    <button
      className={`${cssExports.buttonBase} ${
        design || `${cssExports.buttonPrimary}`
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
