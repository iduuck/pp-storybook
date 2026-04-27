import type { Preview } from "@storybook/react";
import "../src/globals.css";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#161616",
        },
      ],
    },
  },
  globalTypes: {
    darkMode: {
      description: "Dark mode toggle",
      defaultValue: false,
      toolbar: {
        title: "Dark Mode",
        items: [
          { value: false, title: "Light" },
          { value: true, title: "Dark" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.darkMode;
      const body = document.body;

      if (isDark) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }

      return Story();
    },
  ],
};

export default preview;
