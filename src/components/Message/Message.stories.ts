import Message from "./Message";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Message>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: "Quick brown fox jumps over the lazy dog.",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    message: "Quick brown fox jumps over the lazy dog.",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    message: "Quick brown fox jumps over the lazy dog.",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    message: "Quick brown fox jumps over the lazy dog.",
    variant: "danger",
  },
};

export const Info: Story = {
  args: {
    message: "Quick brown fox jumps over the lazy dog.",
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    message: "Quick brown fox jumps over the lazy dog.",
    variant: "warning",
  },
};
