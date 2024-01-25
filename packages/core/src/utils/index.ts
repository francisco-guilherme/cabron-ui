import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

export * from "./theme";

export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});
