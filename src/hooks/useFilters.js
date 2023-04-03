import { skillsList, profesionalProjects } from '../locales/en'

export const useFilters = () => {
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

  return { Filters }
}
