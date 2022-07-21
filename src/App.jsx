import React, { Fragment } from 'react'

// Styles
import { GlobalStyle } from './styles/GlobalStyles';

// Components
import { MainContainer } from './containers/MainContainer';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

export const App = () => {
  return (
    <Fragment>
        <GlobalStyle />
          <MainContainer>
            <SideBar />
            <Header />
            <Content />
          </MainContainer>
    </Fragment>
  )
}
