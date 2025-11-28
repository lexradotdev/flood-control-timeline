export type TimelineReport = {
  dateCreated: Date,
  category: TimelineCategories,
  title: string,
  description: string
  url: string
}

export type TimelineCategories = 'zaldy' | 'gen_news'