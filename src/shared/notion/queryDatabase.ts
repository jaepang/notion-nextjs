import { notion } from '.'
import { QueryDatabaseParameters, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

export const queryDatabase = async (variables: QueryDatabaseParameters): Promise<QueryDatabaseResponse> => {
  return await notion.databases.query(variables)
}
