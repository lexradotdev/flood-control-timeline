import { getHostUrl } from "@/utils/utility";
import { Link2 } from "lucide-react";
import { forwardRef, HTMLAttributes } from "react";

interface ReportPreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {}

interface ReportHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  url: string;
}

interface ReportContentProps extends React.HTMLAttributes<HTMLDivElement> {
  description: string;
  url: string;
}

const ReportPreviewCard = forwardRef<HTMLDivElement, ReportPreviewCardProps>(
  ({className, children, ...rest}, ref) => {
    return (
      <div
        ref={ref}
        className={`p-2 sm:p-3 rounded-lg bg-white border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-200 ${
          className || ""
        }`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

const ReportHeader = forwardRef<HTMLDivElement, ReportHeaderProps>(
  ({ title, url, className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={`flex flex-col items-start ${className || ""}`}
      {...rest}
    >
      <h3 className="font-semibold text-xs sm:text-base text-ellipsis line-clamp-5">{title}</h3>
      <div className="text-xs hidden sm:flex flex-row gap-1 items-center text-gray-400 hover:underline">
        <Link2 size={12} />
        <span>{getHostUrl(url)}</span>
      </div>
      {children}
    </div>
  )
);

const ReportContent = forwardRef<HTMLDivElement, ReportContentProps>(
  ({ description, url, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={`hidden sm:block ${className || ''}`}
      {...rest}
    >
      <p className="text-xs mt-2 text-gray-700 text-ellipsis line-clamp-6">
        {description}
      </p>
    </div>
  )
);

const ReportActions = forwardRef<HTMLDivElement,HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={`mt-3 ${className}`} {...props}>
      {children}
    </div>
  )
);

export { ReportPreviewCard, ReportHeader, ReportContent, ReportActions };
