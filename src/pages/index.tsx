import HomePageComponent from '@components/pages/home'
import { queryDatabase } from '@root/src/shared/notion'

export default function Home({ prefetched }) {
  return <HomePageComponent {...{ prefetched }} />
}

export const getStaticProps = async () => {
  const prefetched = await queryDatabase({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 16,
  })

  return {
    props: {
      prefetched,
    },
  }
}
