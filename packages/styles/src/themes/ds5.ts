import { createBaseTheme } from "../theme";
import { colors } from "../tokens";

export const ds5 = createBaseTheme((theme) => ({
  name: "ds5",
  colors: {
    modes: {
      dawn: {
        scheme: "light",
        backgroundColor: colors.light.atmo2,
        containerBackgroundHover: colors.light.primary_20,
        ...colors.common,
        ...colors.light,
      },
      wicked: {
        scheme: "dark",
        backgroundColor: colors.dark.atmo2,
        containerBackgroundHover: colors.dark.primary_20,
        ...colors.common,
        ...colors.dark,
      },
    },
  },
  typography: {
    display: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.xl4,
      lineHeight: theme.lineHeight.xl4,
    },
    title1: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.xl3,
      lineHeight: theme.lineHeight.xl3,
    },
    title2: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.xl2,
      lineHeight: theme.lineHeight.xl2,
    },
    title3: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.xl,
      lineHeight: theme.lineHeight.xl,
    },
    title4: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.lg,
      lineHeight: theme.lineHeight.lg,
    },
    label: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.base,
    },
    body: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.normal,
      fontSize: theme.fontSize.base,
      lineHeight: theme.lineHeight.base,
    },
    caption1: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.normal,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.sm,
    },
    caption2: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.xs,
    },
  },
}));
