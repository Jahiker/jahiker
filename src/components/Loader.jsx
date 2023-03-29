import React from 'react'
import { Logo } from './Logo'

export const Loader = () => {
  return (
    <div className='w-full min-h-screen fixed inset-0 flex flex-col justify-center items-center bg-transparent'>
      <Logo rotation />
      <h2>Loading...</h2>
    </div>
  )
}
