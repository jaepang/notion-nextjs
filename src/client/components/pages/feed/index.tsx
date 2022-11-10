'use client'

import { useDatabase } from '@root/src/client/hooks'
import PageCard from '@components/PageCard'

export default function FeedPageComponent({ prefetched }) {
  const { items, isLoading, hasNextPage, fetchNextPage } = useDatabase(prefetched)

  function handleLoadMore() {
    if (hasNextPage) fetchNextPage()
  }

  return (
    <div>
      {!isLoading && items.map(item => <PageCard key={item.id} page={item} />)}
      <button onClick={handleLoadMore}>Click me!</button>
    </div>
  )
}
