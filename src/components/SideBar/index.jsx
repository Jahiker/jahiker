import React, { useState } from 'react';
import { Menu, Toggle, MenuList } from './styles';
import { TiThMenuOutline, TiTimesOutline, TiSocialAtCircular } from 'react-icons/ti';
import { BiHomeAlt, BiUserCircle, BiBrain, BiCodeAlt, BiMessageSquareDetail } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io5';

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Menu open={open}>
      <Toggle onClick={handleOpen}>
        { open ? <TiTimesOutline size="55" /> : <TiThMenuOutline size="45" /> }
      </Toggle>
      <MenuList open={open}>
        <li title='Home'>
          <a href="#">
            <BiHomeAlt size="30" />
            { open && <span>Home</span> }
          </a>
        </li>
        <li>
          <a href="#" title='About me'>
            <BiUserCircle size="30" />
            { open && <span>About me</span> }
          </a>
        </li>
        <li>
          <a href="#skills" title='Knowledge'>
            <BiBrain size="30" />
            { open && <span>Skills</span> }
          </a>
        </li>
        <li>
          <a href="#"  title='Projects'>
            <BiCodeAlt size="30" />
            { open && <span>Projects</span> }
          </a>
        </li>
        <li>
          <a href="mailto:rojasjahiker@gmail.com" target="__blank" rel="noopener" title='Mail me'>
            <BiMessageSquareDetail size="30" />
            { open && <span>Mail me</span> }
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=584244245378&text=Hola%20Jahiker!%20Vengo%20desde%20tu%20sitio%20web." title='WhatsApp me' target="__blank" rel="noopener">
            <IoLogoWhatsapp size="30" />
            { open && <span>WhatsApp me</span> }
          </a>
        </li>
        <li>
          <a href="#"  title='Social networks'>
            <TiSocialAtCircular size="30" />
            { open && <span>Social networks</span> }
          </a>
        </li>
      </MenuList>
    </Menu>
  )
}
