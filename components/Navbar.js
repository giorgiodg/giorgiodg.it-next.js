import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/theme'
import { meta, skills, testimonials } from '../data/config'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import useBetterlyticsEvent from '../hooks/useBetterlyticsEvent'
import Link from 'next/link'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)
  const { themeName, toggleTheme } = useContext(ThemeContext)
  const { siteTitle } = meta

  const toggleNavListOverlay = () => {
    showNavList
      ? document.body.classList.remove('disable-scroll')
      : document.body.classList.add('disable-scroll')
    setShowNavList(!showNavList)
  }

  const hideNavListOverlay = () => {
    document.body.classList.remove('disable-scroll')
    setShowNavList(false)
  }

  const trackEvent = useBetterlyticsEvent()

  useEffect(() => {
    const hideNavListOverlayIfScreenIsTooBig = () =>
      window.innerWidth > 600 ? hideNavListOverlay() : null
    window.addEventListener('resize', hideNavListOverlayIfScreenIsTooBig)
    return () =>
      window.removeEventListener('resize', hideNavListOverlayIfScreenIsTooBig)
  }, [])

  return (
    <>
      <nav className='nav container'>
        <ul
          className='nav__list'
          style={{ display: showNavList ? 'flex' : null }}
        >
          <li className='nav__list-item nav__scroll-top'>
            <strong>
              <Link
                href='/'
                onClick={() => {
                  hideNavListOverlay()
                  trackEvent('nav-click', {
                    buttonText: 'Home',
                    source: 'NavBar',
                  })
                }}
                className='link'
              >
                {siteTitle}
              </Link>
            </strong>
          </li>
          <li className='nav__list-item'>
            <Link
              href='/about'
              onClick={() => {
                hideNavListOverlay()
                trackEvent('nav-click', {
                  buttonText: 'About',
                  source: 'NavBar',
                })
              }}
              className='link link--nav'
            >
              About
            </Link>
          </li>
          {skills.length && (
            <li className='nav__list-item'>
              <Link
                href='/skills'
                onClick={() => {
                  hideNavListOverlay()
                  trackEvent('nav-click', {
                    buttonText: 'Skills',
                    source: 'NavBar',
                  })
                }}
                className='link link--nav'
              >
                Skills
              </Link>
            </li>
          )}
          {testimonials.length && (
            <li className='nav__list-item'>
              <Link
                href='/testimonials'
                onClick={() => {
                  hideNavListOverlay()
                  trackEvent('nav-click', { buttonText: 'Testimonials' })
                }}
                className='link link--nav'
              >
                Testimonials
              </Link>
            </li>
          )}
        </ul>

        <button
          type='button'
          onClick={toggleNavListOverlay}
          aria-label='toggle navigation'
          className='btn btn--icon nav__button nav__hamburger'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className='nav__scroll-top'>
          <strong>
            <Link href='/' onClick={hideNavListOverlay} className='link'>
              {siteTitle}
            </Link>
          </strong>
        </div>

        <button
          id='toggle-theme'
          type='button'
          onClick={toggleTheme}
          aria-label='toggle theme'
          className='btn btn--icon nav__button'
        >
          {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
      </nav>
    </>
  )
}

export default Navbar
