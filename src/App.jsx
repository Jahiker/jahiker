import React, { Fragment } from 'react'

// Styles
import { GlobalStyle } from './styles/GlobalStyles';

// Components
import { MainContainer } from './containers/MainContainer';
import { SideBar } from './components/SideBar';

export const App = () => {
  return (
    <Fragment>
        <GlobalStyle />
        <SideBar />
        <MainContainer />
    </Fragment>
  )
}
