import uniqid from 'uniqid'

const TestimonialCard = ({ testimonial }) => (
  <div className='testimonial'>
    <div className='testimonial__description'>
      {testimonial.description && (
        <div className='testimonial__description paragraph__list'>
          {testimonial.description.map((item) => (
            <p key={uniqid()}>{item}</p>
          ))}
        </div>
      )}

      <div className='testimonial__details'>
        {testimonial.name && <>{testimonial.name}</>}&nbsp;-&nbsp;
        {testimonial.role && <>{testimonial.role}</>}
      </div>
    </div>
  </div>
)

export default TestimonialCard
