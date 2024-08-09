const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: 'giorgiodg.it',
}

const meta = {
  author: 'Giorgio Delle Grottaglie',
  siteTitle: 'Giorgio Delle Grottaglie - giorgiodg.it',
  siteShortTitle: 'giorgiodg.it', // Used as logo text in header, footer
  description:
    'I am Giorgio Delle Grottaglie, and I do Technology stuff. Born and raised in the Heel of Italy, based in Rome.',
  siteUrl: 'https://giorgiodg.it',
  siteImage: 'lighthouse.jpg',
  siteLanguage: 'en_UK',
  siteIcon: 'static/favicon.png', // Relative to gatsby-config file
  seoTitleSuffix: 'giorgiodg.it', // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
}

const intro = {
  // each of these properties is optional - they can be left empty or deleted
  // the first element in the `names` array will be treated as your first name, and all the elements combined will be treated as your full name
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Giorgio', 'Delle Grottaglie'],
  role: 'I do Technology stuff',
  headline: ['Born and raised in the Heel of Italy. Based in Rome'],
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
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 1',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 2',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 3',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 4',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  // email: 'johndoe@email.com',
}

export { meta, header, intro, about, projects, skills, contact }
