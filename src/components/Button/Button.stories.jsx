import React from "react";
import { Button } from "./Button";
import '../../tokens/design-tokens.css';
import '../../tokens/semantic-tokens.css';
import './component-tokens.css';

export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    label: "Click me!",
  },
};

export const Secondary = {
  args: {
    label: "Secondary",
  },
};
