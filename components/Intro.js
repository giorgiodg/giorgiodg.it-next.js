import uniqid from 'uniqid'
import Hyphenated from 'react-hyphen'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import BookIcon from '@material-ui/icons/Book'
import { intro } from '../data/config'

const Intro = () => {
  const { fullname, role, company, description, headline, resume, social } =
    intro

  const fadeInAnimationClassName =
    'animate__animated animate__fadeIn animate__delay-5s'

  return (
    <div className='intro'>
      <div className='intro__pseudo-padding intro__pseudo-padding-top' />

      {fullname && (
        <div>
          {fullname && (
            <h1 className='intro__greeting animate__animated animate__fadeInUp animate__delay-1s'>
              Ciao!
              <br />
              I&apos;m {fullname}
            </h1>
          )}
          {role && (
            <h2 className='intro__role animate__animated animate__fadeInUp animate__delay-3s'>
              {role}
              {company && (
                <span>
                  {' '}
                  at <span className='text--strong'>{company}</span>
                </span>
              )}
            </h2>
          )}
          {headline && (
            <h5 className='intro__headline animate__animated animate__fadeInUp animate__delay-3s'>
              {headline.map((item) => (
                <p key={uniqid()}>{item}</p>
              ))}
            </h5>
          )}
        </div>
      )}

      {description && (
        <div className={fadeInAnimationClassName}>
          {description && (
            <div className='intro__desc paragraph__list'>
              <Hyphenated>
                {description.map((item) => (
                  <p key={uniqid()}>{item}</p>
                ))}
                {/* fragments added to prevent react-hyphen error when description length < 2 */}
                <></>
                <></>
              </Hyphenated>
            </div>
          )}
        </div>
      )}

      {(resume || social) && (
        <div className={`intro__contact center ${fadeInAnimationClassName}`}>
          {resume && (
            <a href={resume} target='_blank' rel='noreferrer'>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}

              {social.github && (
                <a
                  href={social.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.medium && (
                <a
                  href={social.medium}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='medium'
                  className='link link--icon'
                >
                  <BookIcon />
                </a>
              )}
            </>
          )}
        </div>
      )}

      <div className='intro__pseudo-padding' />
    </div>
  )
}

export default Intro
