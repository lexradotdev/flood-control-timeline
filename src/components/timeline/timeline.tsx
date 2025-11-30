import { CirclePlus } from "lucide-react";
import { ReactNode } from "react";

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Timeline = (props: TimelineProps) => {
  return (
    <div className="flex flex-col">
      {props.children}
    </div>
  )
}

export const TimelineItem = (props: TimelineItemProps) => {
  const { className, children } = props;

  return (
    <div
      className={`w-full flex flex-row items-center gap-4 ${className || ''}`}
    >
      {children}
    </div>
  );
};

export const TimelineContent = (props: TimelineContentProps) => {
  const { children, className, ...rest } = props;

  return (
    <div className={`flex-1 ${className || ''}`} {...rest}>{children}</div>
  )
}

export const TimelineSeparator = () => {
  return (
    <div
      className={`w-5 h-full relative flex flex-col items-center`}
    >
      <div className="w-0.5 h-1/2 bg-blue-900"></div>
      <CirclePlus className="text-blue-900" />
      <div className="w-0.5 h-1/2 bg-blue-900"></div>
    </div>
  );
};