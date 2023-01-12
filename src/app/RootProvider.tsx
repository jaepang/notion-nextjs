'use client'

import { RecoilRoot } from 'recoil'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@client/shared/react-query'

export default function RootProvider({ children }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  )
}
