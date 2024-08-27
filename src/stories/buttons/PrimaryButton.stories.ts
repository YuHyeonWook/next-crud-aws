import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../app/Button";

const meta = {
  title: "Sample/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 텍스트",
      defaultValue: "Button",
    },

    disabled: {
      control: { type: "boolean" },
      description: "버튼 활성화 여부",
      defaultValue: "Button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "button",
    label: "Primary Button",
    width: "auto",
    fontSize: "base",
    backgroundColor: "bg-blue-400",
    className: "hover:bg-blue-500",
  },
};

export const Secondary: Story = {
  args: {
    type: "button",
    label: "Secondary Button",
    width: "full",
    fontSize: "base",
    backgroundColor: "bg-gray-400",
  },
};
