import { about } from '../data/config'

const About = () => {
  const { image, birthplace, company } = about

  return (
    <section
      className='section skills animate__animated animate__fadeIn animate__delay-5s'
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
          Software Engineering and Business Agility. I currently work as a
          Senior Engineer Manager at&nbsp;
          <a
            href={company.url}
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            {company.name}
          </a>
          .<br />
          In the past I had the chance to cover different roles such as Software
          Engineer, Team Leader, Scrum Master and Technical Program Manager.
        </p>
        <p>
          I&apos;ve built this personal page not only to collect my online
          references but also to challenge myself with trying new Open Source
          libraries and tools for Software Development.
        </p>
        <p>This picture is taken in Porto Cesareo, one of my beloved places.</p>
      </div>
      <div>
        {image && (
          <img className='project__thumbnail' src={image.url} alt={image.alt} />
        )}
      </div>
    </section>
  )
}

export default About
