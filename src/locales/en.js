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
import { WebComponents } from '../components/Icons/WebComponents'
import resume from '../assets/docs/Jahiker-Rojas-CV.pdf'
import jahikerScreen from '../assets/screenshots/jahiker.png'
import adhScreen from '../assets/screenshots/adh.png'
import celsiaScreen from '../assets/screenshots/celsia.png'
import falkonTutorialsScreen from '../assets/screenshots/falkon-tutoriales.png'
import falkonScreen from '../assets/screenshots/falkon.png'
import glokalScreen from '../assets/screenshots/glokalstore.png'
import jackyScreen from '../assets/screenshots/jackymilan.png'
import mysouthsunScreen from '../assets/screenshots/mysouthsun.png'
import protectoScreen from '../assets/screenshots/protecto.png'
import tccScreen from '../assets/screenshots/tcc.png'
import toucheScreen from '../assets/screenshots/touche.png'

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
  { name: 'Web Components', icon: WebComponents },
  { name: 'JQuery', icon: DiJqueryLogo },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'Shopify', icon: FaShopify },
  { name: 'Wordpress', icon: FaWordpressSimple },
  { name: 'Sass', icon: FaSass },
  { name: 'Less', icon: FaLess },
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
  },
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

export const projectsData = {
  title: 'My Projects',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, tempora?'
}

export const profesionalProjects = [
  {
    name: 'Professional Portfolio',
    description: 'Static web portfolio.',
    tags: ['react', 'tailwind', 'css'],
    image: jahikerScreen,
    source_code_link: 'https://github.com/Jahiker/jahiker',
    site_link: 'https://jahiker.github.io/jahiker/',
    year: 2023
  },
  {
    name: 'TCC',
    description:
      'Web-based platform that allows users to search, register or calculate the price of packages shippings.',
    tags: ['react', 'wordpress', 'php', 'sass'],
    image: tccScreen,
    source_code_link: null,
    site_link: 'https://tcc-new.smk.agency/',
    year: 2023
  },
  {
    name: 'Falkon by TCC',
    description:
      'Corporate website, for user information and contact form that let you send claims.',
    tags: ['wordpress', 'php', 'javascript', 'sass'],
    image: falkonScreen,
    source_code_link: null,
    site_link: 'https://falkon.com.co/',
    year: 2022
  },
  {
    name: 'Falkon Tutorials',
    description: 'Landing for video tutorials with filter and sort system',
    tags: ['wordpress', 'php', 'vue', 'sass'],
    image: falkonTutorialsScreen,
    source_code_link: null,
    site_link: 'https://dev.smk.agency/falkon/tutoriales/',
    year: 2023
  },
  {
    name: 'Celsia',
    description:
      'Corporate website, for user information and contact form that let you send claims.',
    tags: ['wordpress', 'php', 'javascript', 'jquery', 'sass', 'bootstrap'],
    image: celsiaScreen,
    source_code_link: null,
    site_link: 'https://www.celsia.com/',
    year: 2020
  },
  {
    name: 'Jacky Milan',
    description: 'E-commerce for household linen.',
    tags: ['shopify', 'javascript', 'web components', 'css'],
    image: jackyScreen,
    source_code_link: null,
    site_link: 'https://jackymilan.com/',
    year: 2022
  },
  {
    name: 'South Sun',
    description: 'Corporate website, for real-estate investments in Colombia.',
    tags: ['wordpress', 'php', 'javascript', 'jquery', 'sass'],
    image: mysouthsunScreen,
    source_code_link: null,
    site_link: 'https://mysouthsun.com/',
    year: 2021
  },
  {
    name: 'Glokal Store',
    description: 'E-commerce of clothes for the whole family.',
    tags: ['shopify', 'javascript', 'web components', 'css'],
    image: glokalScreen,
    source_code_link: null,
    site_link: 'https://glokalstore.com/',
    year: 2022
  },
  {
    name: 'Touche International',
    description:
      'franchise template refactor, from JQuery to modern Javascript.',
    tags: ['shopify', 'javascript', 'web components', 'css'],
    image: toucheScreen,
    source_code_link: null,
    site_link: 'https://touche.co/pages/Franchises',
    year: 2023
  },
  {
    name: 'ADH Store',
    description: 'E-commerce for adhesive materials.',
    tags: ['shopify', 'javascript', 'web components', 'css'],
    image: adhScreen,
    source_code_link: null,
    site_link: 'https://www.adh.com.co/',
    year: 2021
  },
  {
    name: 'Protecto pinturas',
    description: 'Corporate web site for paint and coating company.',
    tags: ['wordpress', 'php', 'jquery', 'css'],
    image: protectoScreen,
    source_code_link: null,
    site_link: 'https://protectopinturas.com/',
    year: 2021
  }
]
