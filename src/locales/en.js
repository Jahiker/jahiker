import freelance from '../assets/images/freelancer.webp'
import smk from '../assets/images/smk.png'
import { TbBrandGithub, TbBrandLinkedin, TbDownload } from 'react-icons/tb'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaReact,
  FaVuejs,
  FaLaravel,
  FaShopify,
  FaWordpressSimple,
  FaSass,
  FaLess,
  FaBootstrap,
  FaWindows,
  FaLinux
} from 'react-icons/fa'
import {
  DiMysql,
  DiJqueryLogo,
  DiStylus,
  DiMaterializecss
} from 'react-icons/di'
import { VscTerminalPowershell } from 'react-icons/vsc'
import { Typescript } from '../components/Icons/Typescript'
import { TailwindCss } from '../components/Icons/TailwindCss'
import resume from '../assets/docs/Jahiker-Rojas-CV.pdf'

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
  description: `I'm a web developer, with ${
    date.getFullYear() - 2020
  } years of experience developing Frontend and Backend web apps. Tech passionate and I love to learn new stuff. Check this site out and know more about me.`
}

export const skillsList = [
  { name: 'Html', icon: FaHtml5 },
  { name: 'Css', icon: FaCss3Alt },
  { name: 'Javascript', icon: FaJsSquare },
  { name: 'Php', icon: FaPhp },
  { name: 'Typescript', icon: Typescript },
  { name: 'React', icon: FaReact },
  { name: 'Vue', icon: FaVuejs },
  { name: 'JQuery', icon: DiJqueryLogo },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'Shopify', icon: FaShopify },
  { name: 'Wordpress', icon: FaWordpressSimple },
  { name: 'Sass', icon: FaSass },
  { name: 'Stylus', icon: DiStylus },
  { name: 'Tailwind', icon: TailwindCss },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Materialize', icon: DiMaterializecss },
  { name: 'MySql', icon: DiMysql },
  { name: 'Terminal', icon: VscTerminalPowershell },
  { name: 'Windows', icon: FaWindows },
  { name: 'Linux', icon: FaLinux }
]

export const socialNetworks = [
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
      'Implementing responsive design and ensuring cross-browser compatibility.'
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

export const contactForm = {
  title: 'Contact Me',
  name: {
    label: 'Name',
    errors: {
      required: 'Name is required'
    }
  },
  email: {
    label: 'Email',
    errors: {
      required: 'Email is required',
      pattern: 'Invalid email'
    }
  },
  messageText: {
    label: 'Message',
    errors: {
      required: 'Message is required'
    }
  },
  submit: {
    label: 'Send',
    sending: 'Sending...'
  },
  success: {
    message: 'Message successfully sent!'
  }
}

export const projectsList = [
  {
    name: 'TCC',
    description:
      'Web-based platform that allows users to search, register or calculate the price of packages shippings.',
    tags: ['react', 'wordpress', 'sass'],
    image: '',
    source_code_link: null,
    site_link: 'https://tcc-new.smk.agency/'
  },
  {
    name: 'Falkon by TCC',
    description:
      'Web-based platform that allows users to search, register or calculate the price of packages shippings.',
    tags: ['react', 'wordpress', 'sass'],
    image: '',
    source_code_link: null,
    site_link: 'https://falkon.com.co/'
  }
]
