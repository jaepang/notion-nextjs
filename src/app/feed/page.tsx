import FeedPageProvider from '@client/components/pages/feed/provider'

import { queryDatabase } from '@root/src/shared/notion'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

export default async function FeedPage() {
  const prefetchDatabase: QueryDatabaseResponse = await queryDatabase({
    database_id: process.env.NOTION_DATABASE_ID,
  })

  return <FeedPageProvider prefetched={prefetchDatabase} />
}
