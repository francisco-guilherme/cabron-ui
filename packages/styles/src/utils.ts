import type { DeepPartial } from "./types";

/**
 * Maps a theme object's properties to CSS variables.
 */
export const mapToCSSVars = <T extends object>(obj: T, prefix = "--uikit") =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => {
      // biome-ignore lint/suspicious/noExplicitAny: Type assertion to bypass the index signature issue
      const castedAcc = acc as any;

      if (typeof value === "object") {
        castedAcc[key] = mapToCSSVars(value, `${prefix}-${key}`);
      } else {
        castedAcc[key] = `var(${prefix}-${key})`;
      }

      return acc;
    },
    {} as DeepPartial<T>,
  );

/**
 * Creates CSS variables from a theme object.
 */
export const toCSSVars = (obj: object, prefix = "--uikit") => {
  const vars = {} as Record<string, string>;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      const nestedVars = toCSSVars(value, `${prefix}-${key}`);

      for (const [nestedKey, nestedValue] of Object.entries(nestedVars)) {
        vars[nestedKey] = nestedValue;
      }
    } else {
      vars[`${prefix}-${key}`] = value;
    }
  }

  return vars;
};
