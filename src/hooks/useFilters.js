import { useState, useEffect, useContext } from 'react'
import { skillsList } from '../locales/en/skills.en'

import { AppContext } from '../context/AppContext'

export const useFilters = () => {
  const { profesionalProjects, projectsData } = useContext(AppContext)
  const [activeFilter, setActiveFilter] = useState('all')
  const [projectsList, setProjectsList] = useState(profesionalProjects)

  useEffect(() => {
    profesionalProjects.forEach((project) => {
      project.tags = project.tags.map((tag) => tag.toLowerCase())
    })

    const newProjecstList = profesionalProjects.filter((project) =>
      project.tags.includes(activeFilter.toLowerCase())
    )

    if (newProjecstList.length > 0) {
      setProjectsList(newProjecstList)
    } else {
      setProjectsList(profesionalProjects)
    }
  }, [activeFilter])

  const filtersList = skillsList.map((skill) => {
    const filter = profesionalProjects.some((project) =>
      project.tags.includes(skill.name.toLowerCase())
    )
    if (filter) {
      return skill
    } else {
      return null
    }
  })

  const Filters = filtersList.filter((item) => {
    return item != null
  })

  return { Filters, activeFilter, setActiveFilter, projectsList, projectsData }
}
