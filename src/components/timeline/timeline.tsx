interface TimelineItemProps {
  date: Date,
  title: string,
  description: string,
  alignToLeft: boolean
}

export const TimelineItem = (props: TimelineItemProps) => {
  const { date, title, description, alignToLeft } = props;

  const contentColumn = (
    <div className={`w-1/2 ${alignToLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
      <div className="inline-block">
        <h3 className="text-base font-semibold text-slate-900 mb-1">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );

  const dateColumn = (
    <div className={`w-1/2 ${alignToLeft ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
      <div className="text-sm font-medium text-slate-500">
        {new Date(date).toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' })}
      </div>
    </div>
  );

  return (
    <div className="relative flex items-center">
      
      {alignToLeft ? (
        <>
          {contentColumn}
          {dateColumn}
        </>
      ) : (
        <>
          {dateColumn}
          {contentColumn}
        </>
      )}

      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full z-10 flex items-center justify-center shadow-sm">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
};