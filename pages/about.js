import About from '../components/About'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - giorgiodg.it </title>
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  )
}
