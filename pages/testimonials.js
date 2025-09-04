import Testimonials from '../components/Testimonials'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Testimonials - giorgiodg.it </title>
      </Head>
      <Layout>
        <Testimonials />
      </Layout>
    </>
  )
}
