import { TbBrandGithub, TbBrandLinkedin, TbDownload } from 'react-icons/tb'
import resume from '../../assets/docs/Jahiker-Rojas-CV-EN.pdf'

const date = new Date()

export const personalDataEN = {
  name: 'Jahiker Rojas',
  country: 'Venezuela',
  city: 'Valencia',
  telf: '+584244245378',
  email: 'rojasjahiker@gmail.com',
  description: `I'm a web developer, with ${
      date.getFullYear() - 2020
    } years of experience developing Frontend and Backend web apps. Tech passionate and I love to learn new stuff. Check this site out and know more about me.`
}

export const socialNetworksEN = [
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/jahiker-robert-rojas-zuniga-726b20121/',
    icon: TbBrandLinkedin,
    download: false
  },
  {
    title: 'Github',
    url: 'https://github.com/Jahiker',
    icon: TbBrandGithub,
    download: false
  },
  {
    title: 'Resume',
    url: resume,
    icon: TbDownload,
    download: true
  }
]
