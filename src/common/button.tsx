import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">;

export default function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...rest}
      type="button"
      className={twMerge(
        rest.className,
        "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}
