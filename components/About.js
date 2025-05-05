import { about } from '../data/config'
import Image from 'next/image'

const About = () => {
  const { image, birthplace, company } = about

  return (
    <section
      className='section about animate__animated animate__fadeIn animate__delay-3s'
      id='about'
    >
      <h2 className='section__title'>About me</h2>
      <div className='paragraph__list'>
        <p>
          I was born and raised in&nbsp;
          <a
            href={birthplace.url}
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            {birthplace.name}
          </a>
          , a nice sunny city in the <em>Heel of Italy</em>, and I am currently
          living in Rome.
        </p>
        <p>
          I am a Technology professional with a significant experience in
          Software Engineering and Business Agility. My last experience was as a
          Senior Engineer Manager at Expedia Group.<br />
          In the past I had the chance to cover different roles such as Software
          Engineer, Team Leader, Scrum Master and Technical Program Manager.
        </p>
        <p>
          I&apos;ve built this personal page not only to collect my online
          references but also to challenge myself with trying new Open Source
          libraries and tools for Software Development.
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
