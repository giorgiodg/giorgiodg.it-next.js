import Head from 'next/head'
import { ThemeProvider } from '../contexts/theme'
import { intro } from '../data/portfolio'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/Header.css'
import '../styles/Navbar.css'
import '../styles/Intro.css'
import '../styles/Projects.css'
import '../styles/ProjectCard.css'
import '../styles/Skills.css'
import '../styles/Contact.css'
import '../styles/ScrollToTop.css'
import '../styles/Footer.css'
import 'animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{intro.names.join(' ') || 'Portfolio'}</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
