import { useDatabase } from '@root/src/client/hooks'

export default function HomePageComponent({ prefetched }) {
  const { items, isLoading, hasNextPage, fetchNextPage } = useDatabase(prefetched)
  console.log(items)

  function handleLoadMore() {
    if (hasNextPage) fetchNextPage()
  }

  return (
    <div>
      <button onClick={handleLoadMore}>Click me!</button>
    </div>
  )
}
