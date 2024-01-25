import { Option, type OptionProps } from "@mui/base/Option";
import {
  Select,
  type SelectProps,
  type SelectRootSlotProps,
} from "@mui/base/Select";
import { cx } from "cva";
import { type ForwardedRef, forwardRef } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

// biome-ignore lint/suspicious/noExplicitAny: tmp
const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === "function" ? fn(args) : fn;

export const HvOption = forwardRef<HTMLLIElement, OptionProps<string | number>>(
  (props, ref) => {
    return (
      <Option
        ref={ref}
        {...props}
        slotProps={{
          root: () => ({
            className:
              "txt-body list-none p-1 hover:bg-primary_20 cursor-pointer",
          }),
        }}
      />
    );
  },
);

const HvSelectButton = forwardRef(function Button<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { ownerState, ...other } = props;
  return (
    <button
      type="button"
      {...other}
      ref={ref}
      className={cx("inline-flex items-center", props?.className)}
    >
      {other.children}
      <RiArrowUpSLine
        className={cx(
          "ml-auto w-[32px] transform transition-all",
          `${other["aria-expanded"] ? "rotate-0" : "-rotate-180"}`,
        )}
      />
    </button>
  );
});

export const HvSelect = forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean,
>(props: SelectProps<TValue, Multiple>, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <div className={cx("relative", props.className)}>
      <Select
        ref={ref}
        {...props}
        slots={{
          root: HvSelectButton,
          ...props.slots,
        }}
        slotProps={{
          ...props.slotProps,
          root: (ownerState) => {
            const resolvedSlotProps = resolveSlotProps(
              props.slotProps?.root,
              ownerState,
            );
            return {
              ...resolvedSlotProps,
              className: cx(
                "txt-label text-secondary aria-expanded:bg-atmo1 hover:bg-primary_20 w-full",
                "h-4 pl-1 border-1 border-secondary bg-transparent",
                resolvedSlotProps?.className,
              ),
            };
          },
          listbox: (ownerState) => {
            const resolvedSlotProps = resolveSlotProps(
              props.slotProps?.listbox,
              ownerState,
            );
            return {
              ...resolvedSlotProps,
              className: cx(
                "text-secondary txt-body border-1 border-secondary bg-atmo1 py-1.5 my[-1px]",
                "[&>li]:mx-1.5 [&>li]:overflow-hidden [&>li]:text-ellipsis",
                resolvedSlotProps?.className,
              ),
            };
          },
          popup: (ownerState) => {
            const resolvedSlotProps = resolveSlotProps(
              props.slotProps?.popup,
              ownerState,
            );
            return {
              ...resolvedSlotProps,
              disablePortal: true,
              className: cx("z-10 w-full", resolvedSlotProps?.className),
            };
          },
        }}
      />
    </div>
  );
});
