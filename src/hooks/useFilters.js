import { skillsList } from '../locales/en/skills.en'
import { profesionalProjects } from '../locales/en/projects.en'

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
