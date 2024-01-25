import { HvOption, HvSelect } from "@hitachivantara/uikit-react-core";
import type { Decorator, Meta, StoryObj } from "@storybook/react";

const decorator: Decorator = (Story) => (
  <div className="w-[300px]">{Story()}</div>
);

const meta: Meta<typeof HvSelect> = {
  title: "Components/Select",
  component: HvSelect,
  // @ts-expect-error https://github.com/storybookjs/storybook/issues/20782
  subcomponents: { HvOption },
  decorators: [decorator],
};

export default meta;
type Story = StoryObj<typeof HvSelect>;

export const Default: Story = {
  render: (args: typeof meta) => (
    <HvSelect defaultValue={10} {...args}>
      <HvOption value={10}>Documentation</HvOption>
      <HvOption value={20}>Components</HvOption>
      <HvOption value={30}>Features</HvOption>
    </HvSelect>
  ),
};

const options = [
  { value: "ar", label: "Argentina", flag: "🇦🇷" },
  { value: "bg", label: "Belgium", flag: "🇧🇪" },
  { value: "pt", label: "Portugal", flag: "🇵🇹" },
  { value: "pl", label: "Poland", flag: "🇵🇱" },
  { value: "sp", label: "Spain", flag: "🇪🇸" },
  { value: "us", label: "United States", flag: "🇺🇸" },
];

export const Other: Story = {
  render: () => (
    <HvSelect defaultValue={10} placeholder="Select countries">
      {options.map(({ value, label, flag }) => (
        <HvOption key={value} value={value} label={label}>
          {`${flag} ${label}`}
        </HvOption>
      ))}
    </HvSelect>
  ),
};
