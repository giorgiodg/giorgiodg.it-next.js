import Link from 'next/link'
import { intro } from '../data/config'

const Cv = () => {
  const { social } = intro

  return (
    <section className='section cv' id='cv'>
      <div className='paragraph__list'>
        <div className='cv__small'>
          If you have landed on this page, it is very likely that you clicked on
          the link in my CV. <br />
          So first of all, welcome and thank you for taking a closer look at my
          profile!
        </div>
        <div className='cv__large'>
          This is my personal website, where you will find some information
          about{' '}
          <Link className='link' href='about'>
            me
          </Link>
          , my professional{' '}
          <Link className='link' href='skills'>
            skills
          </Link>
          , as well as some{' '}
          <Link className='link' href='testimonials'>
            testimonials
          </Link>{' '}
          from colleagues I worked with.
        </div>
        <div className='cv__small'>
          If you've read this far, then I'd like to remind you that if you'd
          like to learn more about my professional profile, here you can find my{' '}
          <a
            href={social.linkedin}
            target='_blank'
            rel='noreferrer'
            className='link'
            onClick={() =>
              trackEvent('cta-click', {
                buttonText: 'LinkedIn',
                source: 'Cv',
              })
            }
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            href={social.github}
            target='_blank'
            rel='noreferrer'
            className='link'
            onClick={() =>
              trackEvent('cta-click', { buttonText: 'GitHub', source: 'Cv' })
            }
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </section>
  )
}

export default Cv
