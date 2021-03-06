import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'

import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllClients, getClientData } from '../../lib/client'
import {getMovies} from '../../lib/navs'

export default function Client({
  allPostsData
}: {
  allPostsData: {
    name: string

  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Welcome to the City of Casey Population estimate</p>

      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('getMovies', getMovies())
    const paths = getAllClients()
    return {
      paths,
      fallback: false
    }
  }

export const getStaticProps: GetStaticProps = async () => {
    const clientData = getClientData('casey')
  return {
    props: {
      name: 'Casey client'
    }
  }
}
