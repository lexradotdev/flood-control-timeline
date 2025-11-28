export type TimelineEntry = {
  dateCreated: Date,
  month: string,
  category: string,
  title: string,
  description: string
}

const TimelineEntry = (data: TimelineEntry) => {
  return (
    <div className="relative flex items-center">
      {/* Left Side */}
      <div className="w-1/2 pr-8 text-right">
        <div className="inline-block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="text-sm font-semibold text-blue-600 mb-2">{data.dateCreated.toDateString()}</div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            {data.title}
          </h3>
          <p className="text-slate-600">{data.description}</p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full z-10"></div>

      {/* Right Side */}
      {/* <div className="w-1/2 pl-8 text-left">
        <div className="inline-block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="text-sm font-semibold text-pink-600 mb-2">{data.dateCreated.toDateString()}</div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Competitor Beta
          </h3>
          <p className="text-slate-600">Entered market with basic features</p>
        </div>
      </div> */}
    </div>
  );
};

export { TimelineEntry }

