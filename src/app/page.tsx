import { Timeline, TimelineContent, TimelineItem, TimelineSeparator } from "@/components/timeline/timeline";
import { getReports } from "@/data/reports";
import { TimelineReport } from "@/utils/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const reports = await getReports();

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

  const renderTimelineItem = (report: TimelineReport, index: number) => {
    const isZaldy = report.category === 'zaldy';
    const dateElement = (
      <time className="text-sm text-gray-500">
        {formatDate(new Date(report.dateCreated).toISOString())}
      </time>
    );
    const contentElement = (
      <div className="p-2 bg-gray-50 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200">
        <h3 className="font-semibold">{report.title}</h3>
        <div className="flex flex-row gap-5 items-center text-justify">
          <p className="text-sm mt-2 text-gray-600 text-ellipsis line-clamp-4">{report.description}</p>
          <Link href={report.url} target="_blank" className="text-blue-600 hover:underline text-sm">
            <ArrowUpRight className="text-2xl" />
          </Link>
        </div>
      </div>
    );

    return (
      <TimelineItem key={index} className="h-[200px]">
        {isZaldy ? (
          <>
            <TimelineContent>
              {contentElement}
            </TimelineContent>
            <TimelineSeparator />
            <TimelineContent>
              {dateElement}
            </TimelineContent>
          </>
        ) : (
          <>
            <TimelineContent className="text-right" >
              {dateElement}
            </TimelineContent>
            <TimelineSeparator />
            <TimelineContent>
              {contentElement}
            </TimelineContent>
          </>
        )}
      </TimelineItem>
    );
  };

  const sortedReports = (reports ?? []).slice().sort((a, b) =>
    // Oldest first
    new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
  );

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold">Zaldy Co VS Corruption Scandal</h1>
        <p className="text-lg mt-2 text-gray-600">A Chronology of Investigations, Whistleblowers, and Public Fallout.</p>
      </div>

      {sortedReports.length === 0 ? (
        <div role="status" className="text-center text-gray-500">
          No reports found.
        </div>
      ) : (
        <section aria-labelledby="timeline-heading" className="max-w-4xl mx-auto">
          <h2 id="timeline-heading" className="sr-only">
            Timeline
          </h2>

          <Timeline role="list" className="space-y-6">
            {sortedReports.map((r, i) => renderTimelineItem(r, (r as any).id ?? i))}
          </Timeline>
          <div className="text-center mt-2 font-bold">End of Timeline</div>
        </section>
      )}
    </main>
  );
}