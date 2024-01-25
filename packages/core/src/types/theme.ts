import type { Theme } from "@hitachivantara/uikit-styles";

export type ActiveTheme = Theme & {
  colorMode: string;
  colorModes: string[];
  colorScheme: string;
};
