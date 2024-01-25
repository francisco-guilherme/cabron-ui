import { cx } from "cva";
import { forwardRef } from "react";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HvHeader = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cx("h-10 bg-atmo1", className)} ref={ref} {...props} />
    );
  },
);
