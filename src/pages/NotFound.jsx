import { useRouteError, Link } from 'react-router-dom'

import { Logo } from '../components'

export const NotFound = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div className='flex flex-col justify-center items-center gap-[30px] min-h-screen'>
      <h1 className='text-[80px] font-extrabold'>404</h1>
      <Logo />
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link
        to='/'
        className='px-5 py-3 bg-dark-mid hover:bg-light hover:border-dark text-primary'
      >
        Go Back
      </Link>
    </div>
  )
}
