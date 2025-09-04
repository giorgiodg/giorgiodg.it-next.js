const meta = {
  author: 'Giorgio Delle Grottaglie',
  title: 'Giorgio Delle Grottaglie - giorgiodg.it',
  description:
    'I am Giorgio Delle Grottaglie, and I do Technology stuff. Born and raised in the Heel of Italy, based in Rome.',
  siteTitle: 'giorgiodg.it',
  url: 'https://giorgiodg.it',
  image: 'images/lighthouse.jpg',
}

const intro = {
  fullname: 'Giorgio Delle Grottaglie',
  role: 'I do Technology stuff',
  social: {
    linkedin: 'https://www.linkedin.com/in/giorgiodellegrottaglie/',
    github: 'https://github.com/giorgiodg',
    medium: 'https://medium.com/@giorgio.dg',
  },
}

const about = {
  image: {
    url: '/images/about.jpg',
    alt: 'A picture of me, in Porto Cesareo',
  },
}

const testimonials = [
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Bill T.',
    role: 'Director',
    description: [
      "Giorgio and I collaborated and coordinated on developer support operations within Expedia's Developer Experience org, where he led our developer support teams and I led several devops squads.",
      'Giorgio was an exceptional partner and a tremendous asset to our organization, which was being hamstrung by a great deal of technical debt and a heavy developer-support burden. [...]',
    ],
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Chris R.',
    role: 'Engineering Leader',
    description: [
      'I had the pleasure of working closely with Giorgio during the period that we were both part of the Developer Experience organisation at Expedia Group.',
      'His background as both an engineer and a scrum master has armed him with a number of qualities that make him a successful leader - he is empathetic, customer-centric and has a strong analytical and technical mindset. Most of all, Giorgio possesses a temperament that makes him extremely enjoyable to work with, and I hope that we get the chance to work together again in the future! [...]',
    ],
  },
  {
    name: 'Iqbal M.',
    role: 'Lead SRE',
    description: [
      'I had the privilege of working with Giorgio in the Developer Support team within the EGDx department. As the manager overseeing the compute platform of RCP, Giorgio displayed exceptional leadership, skillfully managing resources across different geographies.',
      'He was always approachable for guidance and trusted me with opportunities like being part of the hiring team, which greatly contributed to my professional growth. [...]',
    ],
  },
]

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  // {
  //   thumbnail: 'images/placeholder-image.jpeg',
  //   name: 'Project 1',
  //   description: [
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   ],
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://example.com',
  // }
]

const skills = [
  'Multi-Cultural Team Leadership',
  'Stakeholder Management',
  'Business Agility',
  'Agile Practices',
  'Coaching & Mentorship',
  'JavaScript',
  'NodeJS',
  'ReactJS',
  'Next.js',
  'TypeScript',
  'PHP',
  'MySQL',
  'DevOps',
  'AWS',
  'Kubernetes',
  'CI/CD',
  'Python',
  'Bash',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  // email: 'johndoe@email.com',
}

export { meta, intro, about, testimonials, skills, contact, projects }
