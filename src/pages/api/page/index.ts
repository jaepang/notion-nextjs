import { APIErrorCode, ClientErrorCode, isNotionClientError } from '@notionhq/client'
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints'
import { retrievePage } from '@shared/notion'
import { NextApiRequest, NextApiResponse } from 'next'

export interface PageRes {
  error?: string
  page: GetPageResponse | null
  code?: ClientErrorCode | APIErrorCode
}

async function getHandler(req: NextApiRequest, res: NextApiResponse<PageRes>) {
  const variables = { ...req.body }

  try {
    const page = await retrievePage(variables)
    res.status(200).json({ page })
  } catch (e: unknown) {
    if (isNotionClientError(e)) {
      res.status(500).json({ error: e.message, page: null, code: e.code })
    } else {
      throw e
    }
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<PageRes>) {
  return getHandler(req, res)
}
