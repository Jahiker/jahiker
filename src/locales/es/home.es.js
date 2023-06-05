import { TbBrandGithub, TbBrandLinkedin, TbDownload } from 'react-icons/tb'
import resume from '../../assets/docs/Jahiker-Rojas-CV-ES.pdf'

const date = new Date()

export const personalDataES = {
  name: 'Jahiker Rojas',
  country: 'Venezuela',
  city: 'Valencia',
  telf: '+584244245378',
  email: 'rojasjahiker@gmail.com',
  description: `Soy un desarrollador web, con ${
      date.getFullYear() - 2020
    } años de experiencias desarrollando aplicaciones Frontend y Backend. Apacionado de la tecnología y me encanta aprender cosas nuevas. Echa un vistazo a este sitio y conoce más sobre mi.`
}

export const socialNetworksES = [
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
    title: 'Resumen Curricular',
    url: resume,
    icon: TbDownload,
    download: true
  }
]
