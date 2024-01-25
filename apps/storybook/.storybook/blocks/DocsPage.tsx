import {
  ArgsTable,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/blocks";
import React from "react";

export default () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <ArgsTable story="^" />
    <Stories includePrimary={false} />
  </>
);
