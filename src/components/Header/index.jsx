import React, { useState } from 'react';
import { HeaderComponent, Avatar, Settings, SettingsPanel } from './styles';
import { FiSettings } from "react-icons/fi";
import avatar from '@images/avatar.jpeg'

export const Header = () => {
  const [settingsPanel, setSettingsPanel] = useState(false);
  return (
    <HeaderComponent>
      <Settings onClick={() => setSettingsPanel(!settingsPanel)}>
        <FiSettings size="30" />
        { settingsPanel &&  <SettingsPanel><button>Theme</button></SettingsPanel>
        }
      </Settings>
      <Avatar size="55" title='Jahiker Rojas'>
        <img src={ avatar } alt="" />
      </Avatar>
    </HeaderComponent>
  )
}
