import React from 'react'
import { Logo } from './Logo'

export const ProjectsFilters = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <div className='flex flex-wrap justify-start items-center gap-3'>
      <span
        onClick={() => setActiveFilter('all')}
        className={`flex justify-center items-center gap-2 border-2 py-1 px-3 rounded-[20px] transition-transform cursor-pointer hover:scale-105 ${
          activeFilter.toLowerCase() === 'all'
            ? 'text-primary'
            : 'text-light-mid'
        }`}
      >
        <Logo
          fill={`${
            activeFilter.toLowerCase() === 'all' ? '#d5ff40' : '#727272'
          }`}
          size='16px'
        />
        All
      </span>
      {filters?.map((filter) => (
        <span
          key={filter.name}
          onClick={() => setActiveFilter(filter.name)}
          className={`flex justify-center items-center gap-2 border-2 py-1 px-3 rounded-[20px] transition-transform cursor-pointer hover:scale-105 ${
            activeFilter.toLowerCase() === filter.name.toLowerCase()
              ? 'text-primary'
              : 'text-light-mid'
          }`}
        >
          <filter.icon
            fill={`${
              activeFilter.toLowerCase() === filter.name.toLowerCase()
                ? '#d5ff40'
                : '#727272'
            }`}
            color='#292929'
            size='16px'
          />
          {filter.name}
        </span>
      ))}
    </div>
  )
}
