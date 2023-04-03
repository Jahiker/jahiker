import React from 'react'

export const ProjectsFilters = ({ filters }) => {
  return (
    <div className='flex flex-wrap justify-start items-center gap-3'>
      {filters?.map((filter) => (
        <span key={filter.name} className='flex justify-center items-center gap-2 text-light-mid border-2 py-1 px-3 rounded-[20px]'>
          <filter.icon fill='#727272' size='16px' />
          {filter.name}
        </span>
      ))}
    </div>
  )
}
