import { useState, useEffect, createContext } from 'react'

import { mainMenuEN, footerInfoEN } from '../locales/en/app.en'
import { mainMenuES, footerInfoES } from '../locales/es/app.es'
import { personalDataEN, socialNetworksEN } from '../locales/en/home.en'
import { personalDataES, socialNetworksES } from '../locales/es/home.es'
import { projectsDataEN, profesionalProjectsEN } from '../locales/en/projects.en'
import { projectsDataES, profesionalProjectsES } from '../locales/es/projects.es'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() =>
    window.localStorage.getItem('THEME_V1')
      ? JSON.parse(window.localStorage.getItem('THEME_V1'))
      : false
  )
  const [lang, setLang] = useState(() =>
    window.localStorage.getItem('LANG_V1')
      ? JSON.parse(window.localStorage.getItem('LANG_V1'))
      : 'en')

  const [mainMenu, setMainMenu] = useState(mainMenuEN)
  const [footerInfo, setFooterInfo] = useState(footerInfoEN)
  const [personalData, setPersonalData] = useState(personalDataEN)
  const [socialNetworks, setSocialNetworks] = useState(socialNetworksEN)
  const [projectsData, setProjectsData] = useState(projectsDataEN)
  const [profesionalProjects, setProfesionalProjects] = useState(profesionalProjectsEN)

  useEffect(() => {
    window.localStorage.setItem('THEME_V1', JSON.stringify(darkTheme))

    if (darkTheme) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [darkTheme])

  useEffect(() => {
    window.localStorage.setItem('LANG_V1', JSON.stringify(lang))

    if (lang === 'en') {
      setMainMenu(mainMenuEN)
      setFooterInfo(footerInfoEN)
      setPersonalData(personalDataEN)
      setSocialNetworks(socialNetworksEN)
      setProjectsData(projectsDataEN)
      setProfesionalProjects(profesionalProjectsEN)
    } else {
      setMainMenu(mainMenuES)
      setFooterInfo(footerInfoES)
      setPersonalData(personalDataES)
      setSocialNetworks(socialNetworksES)
      setProjectsData(projectsDataES)
      setProfesionalProjects(profesionalProjectsES)
    }
  }, [lang])

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        lang,
        setLang,
        mainMenu,
        footerInfo,
        personalData,
        socialNetworks,
        projectsData,
        profesionalProjects
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
