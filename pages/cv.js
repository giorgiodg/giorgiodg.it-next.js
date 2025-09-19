import Layout from '../components/Layout'
import Head from 'next/head'
import Cv from '../components/Cv'

export default function CVPage() {
  return (
    <>
      <Head>
        <title>Welcome - giorgiodg.it </title>
        <meta name='robots' content='noindex'></meta>
      </Head>
      <Layout>
        <Cv />
      </Layout>
    </>
  )
}
