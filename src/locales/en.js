import freelance from '../assets/images/freelancer.webp'
import smk from '../assets/images/smk.png'

export const mainMenu = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Skills',
    to: '/skills'
  },
  {
    label: 'Experience',
    to: '/experience'
  },
  {
    label: 'Projects',
    to: '/projects'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
]

const date = new Date()

export const personalData = {
  name: 'Jahiker Rojas',
  country: 'Venezuela',
  city: 'Valencia',
  telf: '+584244245378',
  email: 'rojasjahiker@gmail.com',
  description: `I'm a web developer, with ${date.getFullYear() - 2020} years of experience developing web interfaces and apps. Tech passionate and I love to learn new stuff. Scroll down and know more about me.`
}

export const socialNetworks = {
  linkedin: 'https://www.linkedin.com/in/jahiker-robert-rojas-zuniga-726b20121/',
  github: 'https://github.com/Jahiker'
}

export const experience = [
  {
    title: 'Fullstack Web Developer',
    company_name: 'Freelance',
    icon: freelance,
    iconBg: '#FFFFFF',
    date: 'Jan 2020 - Oct 2020',
    points: [
      'Developing and maintaining custom wordpress themes.',
      'Developing and maintaining Laravel and PHP fullstack apps.',
      'Developing and maintaining Vue - Vuetify Frontend apps.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Frontend Web Developer',
    company_name: 'Smk Online',
    icon: smk,
    iconBg: '#FFFFFF',
    date: 'Oct 2020 - Currently',
    points: [
      'Developing and maintaining custom Wordpress themes.',
      'Developing and maintaining custom Shopify themes.',
      'Developing and maintaining React Frontend apps.',
      'Developing and maintaining Vue - Vuetify Frontend apps.',
      'Developing and maintaining Frontend styles systems with technologies like Sass, Bootstrap, Tailwind.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Improve Frontend apps load and performance.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
]
