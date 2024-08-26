const meta = {
  author: 'Giorgio Delle Grottaglie',
  title: 'Giorgio Delle Grottaglie - giorgiodg.it',
  description:
    'I am Giorgio Delle Grottaglie, and I do Technology stuff. Born and raised in the Heel of Italy, based in Rome.',
  siteTitle: 'giorgiodg.it',
  url: 'https://giorgiodg.it',
  image: 'lighthouse.jpg',
}

const intro = {
  // each of these properties is optional - they can be left empty or deleted
  // each element in the `description` array will be treated as a separate paragraph
  fullname: 'Giorgio Delle Grottaglie',
  role: 'I do Technology stuff',
  headline: ['Born and raised in the Heel of Italy', 'Based in Rome'],
  social: {
    linkedin: 'https://www.linkedin.com/in/giorgiodellegrottaglie/',
    github: 'https://github.com/giorgiodg',
    medium: 'https://medium.com/@giorgio.dg',
  },
}

const about = {
  image: {
    url: 'images/about.jpg',
    alt: 'A picture of me, in Porto Cesareo',
  },
  birthplace: {
    name: 'Mesagne',
    url: 'https://en.wikipedia.org/wiki/Mesagne',
  },
  company: {
    name: 'Expedia Group',
    url: 'https://www.expediagroup.com',
  },
}

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
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'Multi-Cultural Team Leadership',
  'Stakeholder Management',
  'DevOps',
  'CI/CD',
  'AWS',
  'Kubernetes',
  'Business Agility',
  'Mentorship',
  'Scrum',
  'Kanban',
  'Python',
  'Bash',
  'JavaScript',
  'WordPress',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  // email: 'johndoe@email.com',
}

export { meta, intro, about, projects, skills, contact }
