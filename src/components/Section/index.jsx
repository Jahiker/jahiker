import React from 'react'

import { SectionWrapper } from './styles'

export const Section = (props) => {
  return (
    <SectionWrapper>
        { props.children }
    </SectionWrapper>
  )
}

