import React from 'react'

import { TitleStyled } from './styles'

export const Title = ({ text, primary = false, h1, h2, h3, h4, h5, h6 }) => {
  return (
    <TitleStyled primary={primary ? true : false}>
      { h1 && <h1>{ text }</h1>}
      { h2 && <h2>{ text }</h2>}
      { h3 && <h3>{ text }</h3>}
      { h4 && <h4>{ text }</h4>}
      { h5 && <h5>{ text }</h5>}
      { h6 && <h6>{ text }</h6>}
    </TitleStyled>
  )
}
