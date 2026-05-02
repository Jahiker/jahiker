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
    name: 'Pugstagram',
    description:
      'Una app social estilo Instagram para amantes de los pugs. Los usuarios pueden navegar y dar me gusta a fotos en un feed responsive.',
    tags: ['react', 'graphql', 'css'],
    image: imgPugstagram,
    siteUrl: 'https://github.com/jahiker/pugstagram',
    sourceCodeUrl: 'https://github.com/jahiker/pugstagram',
    year: 2022,
  },
  {
    name: 'Pokédex',
    description:
      'Una Pokédex web que permite explorar y buscar Pokémon usando datos de la PokéAPI, con una interfaz de tarjetas limpia y responsiva.',
    tags: ['react', 'pokeapi', 'css'],
    image: imgPokedex,
    siteUrl: 'https://github.com/jahiker/pokedex',
    sourceCodeUrl: 'https://github.com/jahiker/pokedex',
    year: 2022,
  },
  {
    name: 'Platzi Conf Merch',
    description:
      'Tienda de merchandising para Platzi Conf construida con React y un contexto global de carrito, con listado de productos y flujo de compra.',
    tags: ['react', 'context api', 'css'],
    image: imgPlatziConf,
    siteUrl: 'https://github.com/jahiker/platzi-conf-merch',
    sourceCodeUrl: 'https://github.com/jahiker/platzi-conf-merch',
    year: 2021,
  },
  {
    name: 'Cashflow App',
    description:
      'Un rastreador de finanzas personales para registrar ingresos y gastos, visualizar el historial de balance y mantener el control del dinero.',
    tags: ['react', 'recharts', 'typescript'],
    image: imgCashflow,
    siteUrl: 'https://github.com/jahiker/cashflow',
    sourceCodeUrl: 'https://github.com/jahiker/cashflow',
    year: 2023,
  },
  {
    name: 'Vue Image Editor',
    description:
      'Un editor de imágenes en el navegador construido con Vue 3 que permite aplicar filtros, recortar y ajustar fotos sin salir de la página.',
    tags: ['vue', 'canvas api', 'javascript'],
    image: imgEditorVue,
    siteUrl: 'https://github.com/jahiker/vue-image-editor',
    sourceCodeUrl: 'https://github.com/jahiker/vue-image-editor',
    year: 2023,
  },
  {
    name: 'Fly Booking',
    description:
      'Un concepto de UI para reserva de vuelos en React con selección de asientos, búsqueda de vuelos y flujo de reserva de varios pasos.',
    tags: ['react', 'typescript', 'tailwind'],
    image: imgFlyBooking,
    siteUrl: 'https://github.com/jahiker/fly-booking',
    sourceCodeUrl: 'https://github.com/jahiker/fly-booking',
    year: 2023,
  },
  {
    name: 'Weather App',
    description:
      'Un dashboard del clima que obtiene pronósticos en tiempo real vía la API de OpenWeather y los muestra con una interfaz limpia y minimalista.',
    tags: ['react', 'openweather api', 'css'],
    image: imgWeather,
    siteUrl: 'https://github.com/jahiker/weather-app',
    sourceCodeUrl: 'https://github.com/jahiker/weather-app',
    year: 2022,
  },
]
