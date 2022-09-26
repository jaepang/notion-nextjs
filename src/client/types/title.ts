import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

export interface Title {
  type: 'title'
  title: Array<RichTextItemResponse>
  id: string
}
