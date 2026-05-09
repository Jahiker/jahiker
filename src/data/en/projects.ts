// spec: specs/06-projects-data.md
import type { Project } from '../types'

import imgPugstagram from '../../images/projects/pugstagram.jpg'
import imgPokedex from '../../images/projects/pokedex.png'
import imgPlatziConf from '../../images/projects/platzi-conf-merch.png'
import imgCashflow from '../../images/projects/cashflow.png'
import imgEditorVue from '../../images/projects/editor-vue.png'
import imgFlyBooking from '../../images/projects/fly-booking.png'
import imgWeather from '../../images/projects/weather-react.png'

export const projects: Project[] = [
  {
    name: 'jr-toolkit',
    description:
      'Spec-Driven Development toolkit for Claude. From raw idea to verified code — a complete structured workflow for AI-assisted development. Define specs first, implement second, verify third.',
    tags: ['claude', 'ai', 'npm', 'cli'],
    image: imgPokedex, // placeholder — image is required by Project type but not rendered (spec 14 v2.x)
    siteUrl: 'https://www.npmjs.com/package/@jahiker/claude-toolkit',
    sourceCodeUrl: 'https://www.npmjs.com/package/@jahiker/claude-toolkit',
    year: 2026,
  },
  {
    name: 'Weather App',
    description:
      'A weather dashboard that fetches real-time forecasts via the OpenWeather API and displays them with a clean, minimal interface.',
    tags: ['react', 'openweather api', 'css'],
    image: imgWeather,
    siteUrl: 'https://github.com/jahiker/weather-app',
    sourceCodeUrl: 'https://github.com/jahiker/weather-app',
    year: 2022,
  },
  {
    name: 'Fly Booking',
    description:
      'A flight booking UI concept built with React, featuring seat selection, flight search, and a multi-step booking flow.',
    tags: ['react', 'typescript', 'tailwind'],
    image: imgFlyBooking,
    siteUrl: 'https://github.com/jahiker/fly-booking',
    sourceCodeUrl: 'https://github.com/jahiker/fly-booking',
    year: 2023,
  },
  {
    name: 'Vue Image Editor',
    description:
      'A browser-based image editor built with Vue 3 that lets users apply filters, crop, and adjust photos without leaving the page.',
    tags: ['vue', 'canvas api', 'javascript'],
    image: imgEditorVue,
    siteUrl: 'https://github.com/jahiker/vue-image-editor',
    sourceCodeUrl: 'https://github.com/jahiker/vue-image-editor',
    year: 2023,
  },
  {
    name: 'Cashflow App',
    description:
      'A personal finance tracker to log income and expenses, visualize balance history, and keep spending under control.',
    tags: ['react', 'recharts', 'typescript'],
    image: imgCashflow,
    siteUrl: 'https://github.com/jahiker/cashflow',
    sourceCodeUrl: 'https://github.com/jahiker/cashflow',
    year: 2023,
  },
  {
    name: 'Platzi Conf Merch',
    description:
      'A merch store for Platzi Conf built with React and a global cart context, supporting product listing and checkout flow.',
    tags: ['react', 'context api', 'css'],
    image: imgPlatziConf,
    siteUrl: 'https://github.com/jahiker/platzi-conf-merch',
    sourceCodeUrl: 'https://github.com/jahiker/platzi-conf-merch',
    year: 2021,
  },
  {
    name: 'Pokédex',
    description:
      'A Pokédex web app that lets you browse and search Pokémon using data from the PokéAPI, with a clean card-based UI.',
    tags: ['react', 'pokeapi', 'css'],
    image: imgPokedex,
    siteUrl: 'https://github.com/jahiker/pokedex',
    sourceCodeUrl: 'https://github.com/jahiker/pokedex',
    year: 2022,
  },
  {
    name: 'Pugstagram',
    description:
      'An Instagram-like social app for pug lovers. Users can browse and like photos in a responsive, scrollable feed.',
    tags: ['react', 'graphql', 'css'],
    image: imgPugstagram,
    siteUrl: 'https://github.com/jahiker/pugstagram',
    sourceCodeUrl: 'https://github.com/jahiker/pugstagram',
    year: 2022,
  },
]
