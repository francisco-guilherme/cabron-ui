import { type VariantProps, cva, cx } from "cva";
import {
  Children,
  type ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";

import type { HvButtonProps } from "../Button";

const buttonGroupVariants = cva({
  variants: {
    /** Use the variant prop to change the visual style of the button.  */
    variant: {
      solid: "",
      outline: "[&&]:!bg-atmo1",
    },
    base: {
      primary: "border-primary_60 bg-primary_80",
      secondary: "border-secondary_60 bg-secondary_80",
      positive: "border-positive_60 bg-positive_80",
      warning: "border-warning_120 bg-warning_120",
      negative: "border-negative_60 bg-negative_80",
    },
    selected: {
      primary: "border-primary bg-atmo1 bg-primary",
      secondary: "border-secondary bg-secondary",
      positive: "border-positive bg-positive",
      warning: "border-warning_140 bg-warning_140",
      negative: "border-negative_120 bg-negative_120",
    },
  },
});

export interface HvButtonGroupProps
  extends Pick<
      HvButtonProps,
      "color" | "size" | "radius" | "iconOnly" | "value" | "onChange"
    >,
    Pick<VariantProps<typeof buttonGroupVariants>, "variant"> {
  /** Children should be HvButton components. */
  children?: React.ReactNode;
  /** Optional className to customize the button group styling. */
  className?: string;
  /** Spacing between buttons in the group. */
  spacing?: number;
}

/**
 * Button Group component is used to manage a collection of buttons.
 */
export const HvButtonGroup = forwardRef<HTMLDivElement, HvButtonGroupProps>(
  (
    {
      children,
      className,
      spacing = 0,
      variant = "outline",
      color = "secondary",
      size = "md",
      radius = "md",
      value,
      onChange,
      iconOnly,
    },
    ref,
  ) => {
    const validChildren = Children.toArray(children).filter(
      (child): child is ReactElement<HvButtonProps> => isValidElement(child),
    );

    return (
      <div
        className={cx("flex", className)}
        style={{ gap: spacing }}
        ref={ref}
        role="group"
      >
        {validChildren.map((child, idx) => {
          const isSelected = Array.isArray(value)
            ? value.includes(child.props.value)
            : value === child.props.value;

          const buttonClasses = cx(
            !spacing && "ml-[-1px]", // Offset the border of the buttons
            !spacing && {
              "!rounded-none": idx > 0 && idx < validChildren.length - 1, // Remove border-radius from middle buttons
              "rounded-r-none": idx === 0,
              "rounded-l-none": idx === validChildren.length - 1,
            },
            isSelected
              ? buttonGroupVariants({ selected: color, variant })
              : buttonGroupVariants({ base: color }),
            child.props.className,
          );

          const handleClick = (evt: React.FormEvent<HTMLButtonElement>) => {
            onChange?.(evt);
          };

          return cloneElement(child as ReactElement, {
            onClick: handleClick,
            className: buttonClasses,
            variant,
            color,
            size,
            radius,
            iconOnly,
          });
        })}
      </div>
    );
  },
);
