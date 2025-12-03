import { db } from "@/lib/firebase";
import { TimelineReport } from "@/utils/types";
import {
  collection,
  getDocs,
} from "firebase/firestore";

async function loadReports(): Promise<TimelineReport[]> {
  try {
    const reportsCollectionRef = collection(db, "timelineEvents");
    const querySnapshot = await getDocs(reportsCollectionRef);

    const reports: TimelineReport[] = [];
    querySnapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data() as TimelineReport;
      reports.push({
        ...data,
      });
    });

    return reports;
  } catch (error) {
    console.error("Error loading reports from Firestore:", error);
    return [];
  }
}

export const getReports = loadReports;
