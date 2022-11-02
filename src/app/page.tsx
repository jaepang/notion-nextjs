import { queryDatabase } from '@shared/notion'

export default async function Main() {
  const database = await queryDatabase({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 50,
  })
  console.log(database)
  return <h1>Hello, Next 13!</h1>
}
