import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

import DocsContainer from "./blocks/DocsContainer";
import DocsPage from "./blocks/DocsPage";
import withProvider from "./decorators/withProvider";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      source: { type: "dynamic" },
      container: DocsContainer,
      page: DocsPage,
    },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withProvider],
};

export default preview;
