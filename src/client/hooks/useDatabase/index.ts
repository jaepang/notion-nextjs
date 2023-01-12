import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { useInfiniteQuery } from 'react-query'
import { fetchDatabase } from '@client/shared/queries'

export function useDatabase(prefetched: QueryDatabaseResponse) {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['database'],
    async ({ pageParam = prefetched?.next_cursor }) =>
      fetchDatabase({
        page_size: 10,
        start_cursor: pageParam,
      }),
    {
      getNextPageParam: lastPage => lastPage?.data.database.next_cursor,
    },
  )

  const { pages } = data ?? {}
  const items = pages?.reduce((acc, page) => [...acc, ...page.data.database.results], prefetched?.results ?? [])

  return {
    items,
    isLoading,
    hasNextPage,
    fetchNextPage,
  }
}
