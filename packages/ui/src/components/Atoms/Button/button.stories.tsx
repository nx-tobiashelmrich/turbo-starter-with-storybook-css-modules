import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";
import style from "./button.module.css";

export default {
  title: "Components/Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

function clickHandler() {
  alert("clicked");
}

export const Primary: ComponentStory<typeof Button> = () => (
  <Button clickHandler={clickHandler}>Button</Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button design={style.buttonSecondary} clickHandler={clickHandler}>
    Button
  </Button>
);
