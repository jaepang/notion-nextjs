import { notion } from '.'
import { QueryDatabaseParameters, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

export async function queryDatabase(variables: QueryDatabaseParameters): Promise<QueryDatabaseResponse> {
  console.log('query!')
  return await notion.databases.query(variables)
}
