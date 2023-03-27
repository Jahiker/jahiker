import { Suspense, lazy } from 'react'
import { createHashRouter } from 'react-router-dom'

import { NotFound } from '../pages/NotFound'
import { Loader } from '../components'

const Root = lazy(() => import('../layout/Root'))

const Home = lazy(() => import('../pages/Home'))
const Skills = lazy(() => import('../pages/Skills'))
const Experience = lazy(() => import('../pages/Experience'))
const Projects = lazy(() => import('../pages/Projects'))
const Contact = lazy(() => import('../pages/Contact'))

export const router = createHashRouter([
  {
    path: '/',
    element: <Suspense fallback={<Loader />}><Root /></Suspense>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/experience',
        element: <Experience />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])
