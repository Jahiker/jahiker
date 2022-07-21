import React from 'react';
import { HeaderComponent, Avatar } from './styles';

import avatar from '@images/avatar.jpeg'

export const Header = () => {
  return (
    <HeaderComponent>
      <Avatar size="55" title='Jahiker Rojas'>
        <img src={ avatar } alt="" />
      </Avatar>
    </HeaderComponent>
  )
}
