import React from "react";
import { Button } from "./Button";
n
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
  type: "button",
};
