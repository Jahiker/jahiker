import { useContext } from 'react'
import { Logo } from './Logo'

import { AppContext } from '../context/AppContext'

export const Loader = () => {
  const { darkTheme } = useContext(AppContext)
  return (
    <div className='w-full min-h-screen fixed inset-0 flex flex-col justify-center items-center bg-transparent dark:bg-dark-mid'>
      {darkTheme
        ? (
          <Logo rotation fill='#c4c4c4' />
          )
        : (
          <Logo rotation />
          )}
      <h2 className='my-5 dark:text-primary'>Loading...</h2>
    </div>
  )
}
