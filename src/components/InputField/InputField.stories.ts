import type { Meta, StoryObj } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import InputField from "./InputField";

const meta = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmailInput: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
  args: {
    id: "input",
    type: "text",
    name: "full_name",
    label: "Full name",
    placeholder: "Full name",
    value: "",
    onChange: () => {},
    onBlur: () => {},
  },
};
