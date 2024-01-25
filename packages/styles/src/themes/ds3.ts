import { createBaseTheme } from "../theme";
import { colors } from "../tokens";

export const ds3 = createBaseTheme((theme) => ({
  name: "ds3",
  colors: {
    modes: {
      dawn: {
        scheme: "light",
        backgroundColor: "#F0F0F0",
        containerBackgroundHover: colors.light.atmo3,
        ...colors.common,
        ...colors.light,
        primary_80: "#477DBD",
        atmo2: "#F0F0F0",
        neutral: "#4D9284",
        catastrophic: "#C51162",
        cat1: "#6EAFFF",
        cat2: "#FFAB5C",
        cat3: "#5CD1B2",
        cat4: "#9672C1",
        cat5: "#ED6868",
        cat6: "#58C9DD",
        cat7: "#FFDB70",
        cat8: "#4AB573",
        cat9: "#646A98",
        cat10: "#EB7397",
        cat11: "#33ABCC",
        cat12: "#F8C169",
      },
      wicked: {
        scheme: "dark",
        backgroundColor: colors.dark.atmo2,
        containerBackgroundHover: colors.dark.atmo3,
        ...colors.common,
        ...colors.dark,
        positive: "#63A621",
        neutral: "#72CCCB",
        catastrophic: "#E26BD2",
        cat1: "#6EAFFF",
        cat2: "#FFAB5C",
        cat3: "#5CD1B2",
        cat4: "#9672C1",
        cat5: "#ED6868",
        cat6: "#58C9DD",
        cat7: "#FFDB70",
        cat8: "#4AB573",
        cat9: "#646A98",
        cat10: "#EB7397",
        cat11: "#33ABCC",
        cat12: "#F8C169",
      },
    },
  },
  space: {
    base: 10,
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "60px",
    xl: "90px",
  },
  breakpoints: {
    unit: "px",
    step: 5,
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1270,
      xl: 1920,
    },
  },
  typography: {
    display: {
      color: theme.colors.secondary,
      fontSize: "42px",
      letterSpacing: "0.02em",
      lineHeight: "52px",
      fontWeight: 600,
    },
    title1: {
      color: theme.colors.secondary,
      fontSize: "32px",
      letterSpacing: "0.02em",
      lineHeight: "40px",
      fontWeight: 600,
    },
    title2: {
      color: theme.colors.secondary,
      fontSize: "22px",
      letterSpacing: "0.02em",
      lineHeight: "30px",
      fontWeight: 600,
    },
    title3: {
      color: theme.colors.secondary,
      fontSize: "18px",
      letterSpacing: "0.02em",
      lineHeight: "28px",
      fontWeight: 600,
    },
    title4: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.lg,
      lineHeight: theme.lineHeight.lg,
    },
    label: {
      color: theme.colors.secondary,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 600,
    },
    body: {
      color: theme.colors.secondary,
      fontSize: "12px",
      letterSpacing: "0.02em",
      lineHeight: "16px",
      fontWeight: 400,
    },
    caption1: {
      color: theme.colors.secondary,
      fontSize: "10px",
      letterSpacing: "0.02em",
      lineHeight: "15px",
      fontWeight: 400,
    },
    caption2: {
      color: theme.colors.secondary,
      fontWeight: theme.fontWeight.semibold,
      fontSize: theme.fontSize.xs,
      lineHeight: theme.lineHeight.xs,
    },
  },
}));
