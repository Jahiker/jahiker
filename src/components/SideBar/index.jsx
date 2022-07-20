import React, { useState } from 'react';
import { Menu, Toggle, MenuList } from './styles';
import { TiThMenuOutline, TiTimesOutline } from 'react-icons/ti';
import { BiHomeAlt } from 'react-icons/bi'

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Menu open={open}>
      <input type="checkbox" id="open_menu" />
      <Toggle onClick={handleOpen}>
        { open ? <TiTimesOutline size="55" /> : <TiThMenuOutline size="45" /> }
      </Toggle>
      <MenuList>
        <li>
          <BiHomeAlt size="30" />
          { open && <span>Home</span> }
        </li>
        <li>
          <BiHomeAlt size="30" />
          { open && <span>Home</span> }
        </li>
        <li>
          <BiHomeAlt size="30" />
          { open && <span>Home</span> }
        </li>
      </MenuList>
    </Menu>
  )
}
