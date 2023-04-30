import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
// import { withActions } from "@storybook/addon-actions/decorator";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "clicked" },
  },
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click .btn"],
  //   },
  // },
  //decorators: [withActions],
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
  parameters,
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
  },
  parameters,
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
  parameters,
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
  parameters,
};

export const Full: Story = {
  args: {
    size: "full",
    label: "Button",
  },
  parameters,
};
