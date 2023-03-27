import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { HiMenu, HiX } from 'react-icons/hi'

import { mainMenu } from '../locales/en'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='flex justify-between items-center gap-5 px-[40px] py-[20px] relative'>
      <NavLink to='/'>
        <div className='flex justify-start items-center gap-3'>
          <Logo size='50px' />
          <h2 className='text-[16px] w-[115px] text-left'>Web Developer</h2>
        </div>
      </NavLink>
      <nav className={`mobile-menu md:flex justify-end gap-4 ${openMenu ? 'flex flex-col absolute top-[100%] right-10 p-5 md:p-3 rounded-lg shadow-md' : 'hidden'}`}>
        {mainMenu && (
          mainMenu.map((item, index) => (<NavLink key={`item-menu-${index}`} to={item.to} className='text-[16px] md:text-[12px] font-extralight hover:text-primary hover:bg-black'>{item.label}</NavLink>))
        )}
      </nav>
      <button className='inline-block md:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <HiX size='30px' /> : <HiMenu size='30px' />}
      </button>
    </div>
  )
}
