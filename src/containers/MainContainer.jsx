import React from 'react'
import { Main } from './styles'

export const MainContainer = (props) => {
  return (
    <Main>
      { props.children }
    </Main>
  )
}
