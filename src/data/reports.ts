import { TimelineEntry } from "@/utils/types";

async function loadReports(): Promise<TimelineEntry[]> {
  try {
    let baseUrl: string;
    if (typeof window !== 'undefined') {
      baseUrl = window.location.origin;
    } else {
      baseUrl = process.env.SITE_URL || "http://localhost:3000";
    }

    const response = await fetch(`${baseUrl}/corruption-reports.json`);
    if (!response.ok) {
      throw new Error(`Failed to load reports data: ${response.status}`)
    }

    const data: TimelineEntry[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading reports:', error);
    return [];
  }
}

export const getReports = loadReports;
