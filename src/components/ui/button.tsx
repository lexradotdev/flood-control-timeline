import { ComponentProps, forwardRef, HTMLAttributes } from "react";


export const Button = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ className = "", children, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={`p-2 text-xs rounded-sm bg-blue-900 hover:cursor-pointer hover:bg-blue-700 text-white ${className}`}
    {...props}
  >
    {children}
  </button>
));