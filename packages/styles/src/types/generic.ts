import type * as CSS from "csstype";

export interface CSSProperties extends CSS.Properties<string | number> {}

export type DeepPartial<T> = {
  [P in keyof T]: T[P] extends object ? DeepPartial<T[P]> : string | number;
} & Partial<T>;
