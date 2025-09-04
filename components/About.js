import { about } from '../data/config'
import Image from 'next/image'

const About = () => {
  const { image } = about

  return (
    <section className='section about' id='about'>
      <h2 className='section__title'>About</h2>
      <div className='paragraph__list'>
        <p>
          I was born and raised in&nbsp;
          <a
            href='https://en.wikipedia.org/wiki/Mesagne'
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            Mesagne
          </a>
          , a nice sunny city in the{' '}
          <a
            href='https://en.wikipedia.org/wiki/Terra_di_Otranto'
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            Heel of Italy
          </a>
          , and I am currently living in Rome.
        </p>
        <p>
          I am a Technology professional with a significant experience in
          Software Engineering, Leadership and Business Agility.
          <br />
          In the past I had the chance to cover different roles such as Senior
          Engineering Manager, Software Engineer, Technical Leader and Scrum
          Master.
        </p>
        <p>
          I built this personal page not only to collect my online references
          but also to challenge myself with trying new Open Source libraries and
          tools for Software Development.
        </p>
        <p>This picture is taken in Porto Cesareo, one of my beloved places.</p>
        {image && (
          <Image
            className='about__image'
            alt={image.alt}
            src={image.url}
            width={500}
            height={665}
            sizes='100vw'
          />
        )}
      </div>
    </section>
  )
}

export default About
