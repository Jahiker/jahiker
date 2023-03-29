import { NavLink } from 'react-router-dom'
import { mainMenu } from '../locales/en'
import { Logo } from './Logo'
const date = new Date()

export const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-start items-center md:justify-between md:items-start gap-5 px-[30px] py-[30px] md:px-[60px] md:py-[40px] text-[12px] md:text-[14px] font-extralight bg-dark text-primary'>
      <span className='block max-w-[90%] text-center'>
        © All rights reserved - Jahiker Rojas {'</>'} - {date.getFullYear()}
      </span>

      <nav className='flex flex-col my-5 md:px-5 md:my-[0] gap-3'>
        <p className='flex relative translate-x-[-25px]'>
          <Logo fill='#D5FF40' size='20' />
          <span className='uppercase ml-2 font-medium'>JKR</span>
        </p>
        {mainMenu &&
          mainMenu.map((item, index) => (
            <NavLink
              key={`item-menu-${index}`}
              to={item.to}
              className='text-[16px] md:text-[12px] font-extralight hover:text-light'
            >
              {item.label}
            </NavLink>
          ))}
      </nav>
    </div>
  )
}
