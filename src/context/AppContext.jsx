import { useState, useEffect, createContext } from 'react'

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
  }, [lang])

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        lang,
        setLang
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
