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
