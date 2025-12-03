import { Timestamp } from "firebase/firestore"

export type TimelineReport = {
  id: string,
  dateCreated: Timestamp,
  category: TimelineCategories,
  title: string,
  description: string,
  url: string,
  source?: string
}

export type TimelineCategories = 'zaldy' | 'gen_news'