import { TimelineItem } from "@/components/timeline/timeline";
import { getReports } from "@/data/reports";

export default async function Home() {
  const reports = await getReports();

  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-4xl font-bold text-center mb-4 text-slate-800">
          Timeline Comparison
        </h1>
        <p className="text-center text-slate-600 mb-12">
          Zaldy Co - Corruption Allegations
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-500 -translate-x-1/2"></div>
          <div className="space-y-12">
            {reports && reports.map((report, index) => (
              <TimelineItem 
                key={index}
                date={report.dateCreated}
                title={report.title}
                description={report.description}
                alignToLeft={report.category == 'zaldy'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}