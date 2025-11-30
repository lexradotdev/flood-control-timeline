import {
  ReportContent,
  ReportHeader,
  ReportPreviewCard,
  ReportSource,
} from "@/components/report-preview-card";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@/components/timeline/timeline";
import { getReports } from "@/data/reports";
import { TimelineReport } from "@/utils/types";
import {
  NewspaperIcon,
  UserRoundSearch,
} from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const reports = await getReports();

  const sortedReports = (reports ?? []).slice().sort(
    (a, b) =>
      // Oldest first
      new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
  );

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const renderTimelineItem = (report: TimelineReport, index: number) => {
    const isZaldy = report.category === "zaldy";

    return (
      <TimelineItem key={index} className="h-[100px] sm:h-[200px]">
        {isZaldy ? (
          <>
            <TimelineContent>
              <Link href={report.url} target="_blank">
                <ReportPreviewCard recordId={index}>
                  <ReportHeader
                    title={report.title}
                    url={report.url}
                    className="text-red-700"
                  />
                  <ReportContent
                    description={report.description}
                    url={report.url}
                  ></ReportContent>
                </ReportPreviewCard>
              </Link>
            </TimelineContent>
            <TimelineSeparator />
            <TimelineContent>
              <ReportPreviewCard
                recordId={index}
                className="bg-white shadow-none"
              >
                <time className="text-sm text-gray-500">
                  {formatDate(new Date(report.dateCreated).toISOString())}
                </time>
              </ReportPreviewCard>
            </TimelineContent>
          </>
        ) : (
          <>
            <TimelineContent>
              <ReportPreviewCard
                className="text-right bg-white shadow-none"
                recordId={index}
              >
                <time className="text-sm text-gray-500">
                  {formatDate(new Date(report.dateCreated).toISOString())}
                </time>
              </ReportPreviewCard>
            </TimelineContent>
            <TimelineSeparator />
            <TimelineContent>
              <Link href={report.url} target="_blank">
                <ReportPreviewCard recordId={index}>
                  <ReportHeader
                    title={report.title}
                    url={report.url}
                    className="text-blue-900"
                  />
                  <ReportContent
                    description={report.description}
                    url={report.url}
                  ></ReportContent>
                </ReportPreviewCard>
              </Link>
            </TimelineContent>
          </>
        )}
      </TimelineItem>
    );
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold">
          <span className="text-red-700">Zaldy Co</span> VS{" "}
          <span className="text-blue-900">Corruption Scandal</span>
        </h1>
        <p className="text-lg mt-2 text-gray-600">
          A Chronology of Investigations, Whistleblowers, and Public Fallout.
        </p>
      </div>

      {sortedReports.length === 0 ? (
        <div role="status" className="text-center text-gray-500">
          No reports found.
        </div>
      ) : (
        <section
          aria-labelledby="timeline-heading"
          className="max-w-4xl mx-auto"
        >
          <h2 id="timeline-heading" className="sr-only">
            Timeline
          </h2>

          <div>
            <div>
              <div className="flex flex-row justify-around gap-5">
                <div className="flex flex-col items-center">
                  <UserRoundSearch className="text-red-700 text-lg" />
                  <span>Zaldy Co's</span>
                </div>
                <div className="flex flex-col items-center">
                  <NewspaperIcon className="text-blue-900 text-lg" />
                  <span>General Media</span>
                </div>
              </div>
            </div>
          </div>

          <Timeline role="list" className="space-y-6">
            {sortedReports.map((r, i) =>
              renderTimelineItem(r, (r as any).id ?? i)
            )}
          </Timeline>

          <div className="text-center mt-2 font-bold">End of Timeline</div>
        </section>
      )}
    </main>
  );
}
