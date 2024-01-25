import { HvProvider } from "@hitachivantara/uikit-react-core";
import { Global } from "@storybook/theming";
import React from "react";

import { getStoryStyles } from "../theme/story-styles";

export default (Story) => {
  const storyStyles = getStoryStyles("#F4F5F5");

  return (
    <>
      <Global styles={storyStyles} />
      <HvProvider>
        <Story />
      </HvProvider>
    </>
  );
};
