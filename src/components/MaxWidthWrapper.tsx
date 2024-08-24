import { cn } from "@/lib/utils";
import { ReactNode } from "react";

/**
 * The MaxWidthWrapper component wraps its children in a `div` element and applies
 * the following styles:
 *
 * - `h-full` to make the element the full height of its parent
 * - `mx-auto` to make the element horizontally centered
 * - `w-full-screen-xl` to make the element as wide as the screen on extra large
 *   screens
 * - `max-w-screen-xl` to prevent the element from growing wider than the screen
 *   on extra large screens
 * - `px-2.5` to add padding to the left and right sides of the element on small
 *   screens
 * - `md:px-20` to add padding to the left and right sides of the element on medium
 *   screens and above
 *
 * The component also accepts a `className` prop which can be used to add additional
 * styles to the element.
 */
const MaxWidthWrapper = ({className, children}:{
  className?: string,
   children: ReactNode
  }) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full-screen-xl max-w-screen-xl px-2.5 md:px-20",
        className

      )}
      
    >{children}</div>
  );
};
export default MaxWidthWrapper;
