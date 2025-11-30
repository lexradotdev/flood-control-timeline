import { getHostUrl } from "@/utils/utility";
import { Link2 } from "lucide-react";

interface ReportPreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  recordId: number;
}

interface ReportSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  source: string;
}

interface ReportHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  url: string;
}

interface ReportContentProps extends React.HTMLAttributes<HTMLDivElement> {
  description: string;
  url: string;
}

const ReportPreviewCard = (props: ReportPreviewCardProps) => {
  const { recordId, children, className, ...rest } = props;

  return (
    <div
      className={`p-2 rounded-lg bg-gray-50 cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200 ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

const ReportSource = (props: ReportSourceProps) => {
  const { className, ...rest } = props;

  return (
    <div
      className={`text-xs text-gray-500 font-semibold ${className || ""}`}
      {...rest}
    >
      {props.source}
    </div>
  );
};

const ReportHeader = (props: ReportHeaderProps) => {
  const { title, url, className, children, ...rest } = props;

  return (
    <div className={`flex flex-col items-start ${className || ""}`} {...rest}>
      <h3 className="font-semibold text-xs sm:text-base">{title}</h3>
      <div className="text-xs flex flex-row gap-1 items-center text-gray-400 hover:underline">
        <Link2 size={12} />
        <span>{getHostUrl(url)}</span>
      </div>
    </div>
  );
};

const ReportContent = (props: ReportContentProps) => {
  const { description, url, className, ...rest } = props;

  return (
    <div className="flex-row gap-5 items-center text-justify hidden sm:flex">
      <p className="text-xs mt-2 text-gray-700 text-ellipsis line-clamp-6">
        {description}
      </p>
    </div>
  );
};

export { ReportPreviewCard, ReportSource, ReportHeader, ReportContent };
