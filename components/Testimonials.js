import uniqid from 'uniqid'
import TestimonialCard from './TestimonialCard'
import { testimonials, intro } from '../data/config'
import useBetterlyticsEvent from '../hooks/useBetterlyticsEvent'

const Testimonials = () => {
  const trackEvent = useBetterlyticsEvent()
  if (!testimonials.length) return null

  return (
    <section
      className='section testimonials animate__animated animate__fadeIn animate__delay-3s'
      id='testimonials'
    >
      <h2 className='section__title'>Testimonials</h2>
      <div className='testimonials__column'>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={uniqid()} testimonial={testimonial} />
        ))}
        <div className='testimonials__more'>
          See more testimonials on my&nbsp;
          <a
            href={intro.social.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='medium'
            className='link'
            onClick={() =>
              trackEvent('cta-click', {
                buttonText: 'LinkedIn',
                source: 'Testimonials',
              })
            }
          >
            LinkedIn profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
