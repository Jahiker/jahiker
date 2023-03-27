import React from 'react'
const date = new Date()

export const Footer = () => {
  return (
    <div className='flex justify-between items-center gap-5 px-[30px] py-[20px] text-[14px] font-extralight bg-dark text-primary'>
      <span>© All rights reserved - Jahiker Rojas {'</>'} - {date.getFullYear()}</span>
    </div>
  )
}
