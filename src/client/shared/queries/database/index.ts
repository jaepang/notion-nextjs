import axios, { AxiosError } from 'axios'
import { QueryDatabaseBodyParameters } from '@root/src/client/types'
import { DatabaseRes } from '@api/database'

interface AxiosDatabaseRes {
  error?: string
  data: DatabaseRes | null
  code?: AxiosError['code']
}

export async function fetchDatabase(variables: QueryDatabaseBodyParameters): Promise<AxiosDatabaseRes> {
  try {
    const res = await axios.post<DatabaseRes>('/api/database', variables)
    return res
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      return { error: e.message, data: null, code: e.code }
    } else {
      throw e
    }
  }
}
