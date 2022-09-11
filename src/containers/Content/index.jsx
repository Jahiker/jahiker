import React from "react"
import { Content as Main, Button } from "./styles"
import { Skills } from "../../components/Skills"

export const Content = () => {
  return (
    <Main>
        <h1>Jahiker Rojas</h1>
        <h4>Frontend Web Developer</h4>
        <p>Site under construction!!!</p>
        <Button href="https://github.com/Jahiker" target="__blank" rel="noopener" primary>
          GitHub
        </Button>
        <Skills />
    </Main>
  )
}
