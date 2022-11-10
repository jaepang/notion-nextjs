'use client'

import FeedPageComponent from '.'

import { queryClient } from '@client/shared/react-query'
import { QueryClientProvider } from 'react-query'

export default function FeedPageProvider({ prefetched }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedPageComponent prefetched={prefetched} />
    </QueryClientProvider>
  )
}
