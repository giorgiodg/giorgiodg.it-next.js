import Header from './Header'
import Footer from './Footer'
import { ThemeContext } from '../contexts/theme'
import { useContext, useEffect } from 'react'

export default function Layout({ children }) {
  const { themeName } = useContext(ThemeContext)

  useEffect(() => {
    const oldThemeName = themeName === 'dark' ? 'light' : 'dark'
    document.body.classList.remove(oldThemeName)
    document.body.classList.add(themeName)
  }, [themeName])
  return (
    <>
      <div className='app'>
        <Header />
        <main class='container'>{children}</main>
        <Footer />
      </div>
    </>
  )
}
