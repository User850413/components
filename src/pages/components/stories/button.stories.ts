import { StoryObj } from "@storybook/react";
import Button from "../button";

const meta = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "button",
  },
};
