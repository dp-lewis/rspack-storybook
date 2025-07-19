import React from "react";
import { Message } from "./Message";

export default {
  title: "Atoms/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
    },
    children: { control: "text" },
  },
};

const Template = (args) => <Message {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: "info",
  children: "This is an info message.",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  children: "This is a success message!",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  children: "This is a warning message!",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  children: "This is an error message!",
};
