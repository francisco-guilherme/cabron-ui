import { DocsContainer } from "@storybook/addon-docs";
import { Global } from "@storybook/theming";
import React, { useMemo } from "react";

import { getDocsStyles } from "../theme/docs-styles";

export default ({ context, children }) => {
  const docsStyles = useMemo(() => getDocsStyles(), []);

  return (
    <>
      <DocsContainer context={context}>
        <Global styles={docsStyles} />
        {children}
      </DocsContainer>
    </>
  );
};
