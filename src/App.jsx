import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App () {
  return (
    <RouterProvider router={router}>
      <div className='App bg-primary min-h-screen'>
        <h1>App</h1>
      </div>
    </RouterProvider>
  )
}

export default App
