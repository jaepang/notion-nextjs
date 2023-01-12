import { queryDatabase } from '@shared/notion'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import FeedPageComponent from '@components/feedPage/FeedPageComponent'

export default async function FeedPage() {
  const prefetchDatabase: QueryDatabaseResponse = await queryDatabase({
    database_id: process.env.NOTION_DATABASE_ID,
  })

  return <FeedPageComponent prefetched={prefetchDatabase} />
}
