import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { HiMenu, HiX } from 'react-icons/hi'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='flex justify-between items-center gap-5 px-[40px] py-[20px] relative'>
      <NavLink to='/'>
        <div className='flex justify-start items-center gap-3'>
          <Logo size='50px' />
        </div>
      </NavLink>
      <nav className={`md:flex justify-end gap-4 ${openMenu ? 'flex flex-col absolute bottom-[-165%] right-10 p-3 backdrop:blur-md bg-dark-op-300 rounded-lg' : 'hidden'}`}>
        <NavLink to='/' className='text-[12px] font-extralight hover:text-primary hover:bg-black'>Home</NavLink>
        <NavLink to='/about' className='text-[12px] font-extralight hover:text-primary hover:bg-black'>About</NavLink>
        <NavLink to='/experience' className='text-[12px] font-extralight hover:text-primary hover:bg-black'>Experience</NavLink>
        <NavLink to='/projects' className='text-[12px] font-extralight hover:text-primary hover:bg-black'>Projects</NavLink>
        <NavLink to='/contact' className='text-[12px] font-extralight hover:text-primary hover:bg-black'>Contact</NavLink>
      </nav>
      <button className='inline-block md:hidden cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <HiX size='30px' /> : <HiMenu size='30px' />}
      </button>
    </div>
  )
}
