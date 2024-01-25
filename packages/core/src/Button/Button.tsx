import { Button, type ButtonProps } from "@mui/base/Button";
import { type VariantProps, cva, cx } from "cva";
import { forwardRef } from "react";

import { HvLoader, type HvLoaderColor } from "../Loader";

const getLoaderColor = (className: string): HvLoaderColor => {
  const regex = /(?<!\w)bg-[a-zA-Z0-9]+(?=\s|$)/g;
  const colors = className.match(regex);
  const isTransparent = colors?.includes("bg-transparent");

  return isTransparent
    ? (colors?.[1]?.replace("bg-", "") as HvLoaderColor)
    : "atmo1";
};

const buttonVariants = cva({
  base: cx(
    "flex items-center justify-center transition-all",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline focus-visible:ring-4 focus-visible:ring-offset-0",
  ),
  variants: {
    /** The visual style of the Button. */
    variant: {
      solid: "!text-atmo1",
      outline:
        "!bg-transparent border-1 !active:bg-primary_30 !hover:bg-primary_20",
      ghost: "bg-transparent !active:bg-primary_30 !hover:bg-primary_20",
      link: "!bg-transparent text-secondary underline-offset-4 hover:underline",
    },
    /** The color scheme of the Button. */
    color: {
      primary:
        "border-primary bg-primary text-primary active:bg-primary hover:bg-primary_80",
      secondary:
        "border-secondary bg-secondary text-secondary active:bg-secondary hover:bg-secondary_80",
      positive:
        "border-positive bg-positive text-positive active:bg-positive hover:bg-positive_80",
      warning:
        "border-warning_140 bg-warning_140 text-warning_140 active:bg-warning_140 hover:bg-warning_120",
      negative:
        "border-negative_120 bg-negative_120 text-negative_120 active:bg-negative_120 hover:bg-negative_80",
    },
    /** The size of the button. */
    size: {
      sm: "txt-caption1 !font-semibold h-3 px-2",
      md: "txt-body !font-semibold h-4 px-2",
      lg: "txt-body !font-semibold h-6 px-3",
    },
    /** The border-radius of the button.*/
    radius: {
      none: "rounded-0",
      sm: "rounded-base",
      md: "rounded-round",
      lg: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
    radius: "sm",
  },
});

const iconVariants = cva({
  variants: {
    size: {
      sm: "!text-1.5 !p-[4px] min-h-[24px] min-w-[24px]",
      md: "!text-2 !p-[8px] min-h-[32px] min-w-[32px]",
      lg: "!text-3 !p-[11px] min-h-[48px] min-w-[48px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface HvButtonProps
  extends Omit<ButtonProps, "color">,
    VariantProps<typeof buttonVariants> {
  /** Icon or any other element placed before the children. */
  leftIcon?: React.ReactNode;
  /** Icon or any other element placed after the children. */
  rightIcon?: React.ReactNode;
  /** If `true`, display a loader component inside the button. */
  loading?: boolean;
  /** If `true`, set the button as pressed. */
  selected?: boolean;
  /** If `true`, adjust the button layout to the icon. */
  iconOnly?: boolean;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
}

/**
 * Button component is used to trigger an action or event.
 */
export const HvButton = forwardRef<HTMLButtonElement, HvButtonProps>(
  ({ className, children, ...props }, ref) => {
    const { leftIcon, rightIcon, loading, selected, iconOnly } = props;
    const buttonClassNames = buttonVariants(props);
    const loaderColor = getLoaderColor(buttonClassNames);

    return (
      <Button
        className={cx(
          buttonClassNames,
          iconOnly && iconVariants(props),
          className,
        )}
        ref={ref}
        {...props}
        {...(selected && { "aria-pressed": "true" })}
      >
        {leftIcon && <span className={cx(children && "mr-1")}>{leftIcon}</span>}
        {loading && (
          <HvLoader className={cx(children && "mr-1")} color={loaderColor} />
        )}
        {children}
        {rightIcon && (
          <span className={cx(children && "ml-1")}>{rightIcon}</span>
        )}
      </Button>
    );
  },
);
