import {
  HvButton,
  HvHeader,
  HvOption,
  HvSelect,
  useTheme,
} from "@hitachivantara/uikit-react-core";

export const Navigation = () => {
  const { themes, activeTheme, changeTheme, changeColorMode } = useTheme();
  const { colorModes } = activeTheme || {};

  return (
    <HvHeader className="flex items-center gap-2 p-2">
      <HvSelect
        value={activeTheme?.name}
        onChange={(_, value) =>
          changeTheme(value as string, activeTheme?.colorMode)
        }
      >
        {themes?.map(({ name }) => (
          <HvOption key={name} value={name}>
            {name}
          </HvOption>
        ))}
      </HvSelect>
      <HvSelect
        value={activeTheme?.colorMode}
        onChange={(_, value) => changeColorMode(value as string)}
      >
        {colorModes?.map((mode) => (
          <HvOption key={mode} value={mode}>
            {mode}
          </HvOption>
        ))}
      </HvSelect>
      <HvButton>Button</HvButton>
    </HvHeader>
  );
};
