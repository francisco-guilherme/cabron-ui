import { HvButton, HvButtonGroup } from "@hitachivantara/uikit-react-core";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  RxDownload,
  RxEnvelopeClosed,
  RxGear,
  RxShare1,
  RxTextAlignCenter,
  RxTextAlignJustify,
  RxTextAlignLeft,
  RxTextAlignRight,
} from "react-icons/rx";

const meta: Meta<typeof HvButtonGroup> = {
  title: "Components/Button Group",
  component: HvButtonGroup,
  decorators: [
    (Story: StoryFn) => (
      <div className="flex flex-col gap-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HvButtonGroup>;

export const Main: Story = {
  render: () => {
    return (
      <HvButtonGroup>
        <HvButton value="email" leftIcon={<RxEnvelopeClosed />}>
          Email
        </HvButton>
        <HvButton value="download" leftIcon={<RxDownload />}>
          Download
        </HvButton>
        <HvButton value="settings" leftIcon={<RxGear />}>
          Settings
        </HvButton>
        <HvButton value="support" leftIcon={<RxShare1 />}>
          Share
        </HvButton>
      </HvButtonGroup>
    );
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use the `size`, `color` and `radius` props to control the visual style of the button group.",
      },
    },
  },
  render: () => {
    return (
      <>
        <HvButtonGroup
          variant="solid"
          color="primary"
          size="sm"
          value="option2"
        >
          <HvButton value="option1">Option 1</HvButton>
          <HvButton value="option2">Option 2</HvButton>
          <HvButton value="option3">Option 3</HvButton>
          <HvButton value="option4">Option 4</HvButton>
        </HvButtonGroup>
        <HvButtonGroup
          variant="outline"
          color="primary"
          size="md"
          value="option2"
        >
          <HvButton value="option1">Option 1</HvButton>
          <HvButton value="option2">Option 2</HvButton>
          <HvButton value="option3">Option 3</HvButton>
          <HvButton value="option4">Option 4</HvButton>
        </HvButtonGroup>
        <HvButtonGroup
          variant="outline"
          color="secondary"
          size="lg"
          radius="lg"
          value="option2"
        >
          <HvButton value="option1">Option 1</HvButton>
          <HvButton value="option2">Option 2</HvButton>
          <HvButton value="option3">Option 3</HvButton>
          <HvButton value="option4">Option 4</HvButton>
        </HvButtonGroup>
      </>
    );
  },
};

export const Single_and_Multi_Selection: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use the `value` and `onChange` props to control the selected state of the button group.",
      },
    },
  },
  render: () => {
    const [singleValue, setSingleValue] = useState("option1");
    const [multipleValue, setMultipleValue] = useState(["option1", "option2"]);

    const handleSingle = (evt: React.MouseEvent<HTMLButtonElement>) => {
      const val = evt.currentTarget.value;
      setSingleValue(val);
    };

    const handleMultiple = (evt: React.MouseEvent<HTMLButtonElement>) => {
      const val = evt.currentTarget.value;
      const newValue = multipleValue.includes(val)
        ? multipleValue.filter((f) => f !== val)
        : multipleValue.concat([val]);

      setMultipleValue(newValue);
    };

    return (
      <>
        <HvButtonGroup
          color="primary"
          value={singleValue}
          onChange={handleSingle}
        >
          <HvButton value="option1">Option 1</HvButton>
          <HvButton value="option2">Option 2</HvButton>
          <HvButton value="option3">Option 3</HvButton>
          <HvButton value="option4">Option 4</HvButton>
        </HvButtonGroup>
        <HvButtonGroup
          color="secondary"
          value={multipleValue}
          onChange={handleMultiple}
        >
          <HvButton value="option1">Option 1</HvButton>
          <HvButton value="option2">Option 2</HvButton>
          <HvButton value="option3">Option 3</HvButton>
          <HvButton value="option4">Option 4</HvButton>
        </HvButtonGroup>
      </>
    );
  },
};

export const Misc: Story = {
  render: () => {
    return (
      <>
        <HvButtonGroup value="button2" iconOnly>
          <HvButton value="button1" leftIcon={<RxTextAlignLeft />} />
          <HvButton value="button2" leftIcon={<RxTextAlignCenter />} />
          <HvButton value="button3" leftIcon={<RxTextAlignRight />} />
          <HvButton value="button4" leftIcon={<RxTextAlignJustify />} />
        </HvButtonGroup>
        <HvButtonGroup variant="solid" color="primary" value="button2">
          <HvButton value="button1">Button 1</HvButton>
          <HvButton value="button2">Button 2</HvButton>
          <HvButton value="button3">Button 3</HvButton>
          <HvButton value="button4">Button 4</HvButton>
        </HvButtonGroup>
        <HvButtonGroup color="primary" size="lg" radius="lg" value="button2">
          <HvButton value="button1">Button 1</HvButton>
          <HvButton value="button2">Button 2</HvButton>
          <HvButton value="button3">Button 3</HvButton>
          <HvButton value="button4">Button 4</HvButton>
        </HvButtonGroup>
      </>
    );
  },
};
