import axios, { AxiosError } from 'axios'
import { GetPageParameters } from '@notionhq/client/build/src/api-endpoints'
import { PageRes } from '@api/page'

interface AxiosPageRes {
  error?: string
  data: PageRes | null
  code?: AxiosError['code']
}

export async function fetchPage(variables: GetPageParameters): Promise<AxiosPageRes> {
  try {
    const res = await axios.post<PageRes>('/api/page', variables)
    return res
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      return { error: e.message, data: null, code: e.code }
    } else {
      throw e
    }
  }
}
