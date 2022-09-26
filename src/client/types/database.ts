import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'

export type QueryDatabaseBodyParameters = Omit<QueryDatabaseParameters, 'database_id'>
