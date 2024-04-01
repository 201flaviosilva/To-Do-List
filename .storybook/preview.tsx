import type { Preview } from "@storybook/react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import "../src/index.css";
import { store } from "../src/app/store";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <HashRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </HashRouter>
    ),
  ],
};

export default preview;
