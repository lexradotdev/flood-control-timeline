import { CirclePlus } from "lucide-react";
import { forwardRef, ReactNode } from "react";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`flex flex-col ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`w-full flex flex-row items-center gap-4 flex-nowrap ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={`w-1/2 ${className || ""}`} {...rest}>
        {children}
      </div>
    );
  }
);

export const TimelineSeparator = () => {
  return (
    <div className={`w-5 h-full relative flex flex-col items-center shrink-0`}>
      <div className="w-0.5 h-1/2 bg-blue-900"></div>
      <CirclePlus className="text-blue-900" />
      <div className="w-0.5 h-1/2 bg-blue-900"></div>
    </div>
  );
};
