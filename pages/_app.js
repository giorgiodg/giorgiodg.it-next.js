import Head from 'next/head'
import { ThemeProvider } from '../contexts/theme'
import { meta } from '../data/config'
import { useEffect } from 'react'
import betterlytics from '@betterlytics/tracker'
import '../styles/index.css'
import '../styles/About.css'
import '../styles/App.css'
import '../styles/Header.css'
import '../styles/Navbar.css'
import '../styles/Intro.css'
import '../styles/Testimonials.css'
import '../styles/TestimonialCard.css'
import '../styles/Skills.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import 'animate.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    var host = window.location.hostname
    if (host != 'localhost') {
      betterlytics.init('giorgiodg-mdx504uk')
    }
  }, [])
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:site_name' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={meta.url + '/' + meta.image} />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
