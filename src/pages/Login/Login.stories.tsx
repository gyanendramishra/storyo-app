import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import LoginPage from "./Login";
import store from "../../store";

const Mockstore: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const meta = {
  title: "Pages/Login",
  component: LoginPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {};
Login.decorators = [(story) => <Mockstore>{story()}</Mockstore>];

// // More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole("button", {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
