import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import Input from './UI/Input'
import Select from './UI/Select'


export default function FilterPanel({filter}) {

  const [filterValues, setFilterValues] = useState({
    filter: "",
    query:""
  })

  const debounced = useDebounce(filterValues.query)

  useEffect(()=>{
    filter({query: debounced, filter: filterValues.filter})
  }, [debounced, filterValues.filter])

  return (
    <div className='flex justify-between align-middle'>
      <div className='w-full max-w-xs relative'>
        <svg  className="w-3 h-3 absolute top-5 left-2 opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <Input 
            className = "rounded-md shadow-md p-2 pl-8 h-12 text-sm "
            placeholder = 'Search for country...'
            value = {filterValues.query}
            onChange = {e => setFilterValues({...filterValues, query: e.target.value})}
          />
      </div>
        <Select
          value={filterValues.filter}
          onChange = {selectedFilter => setFilterValues({...filterValues, filter: selectedFilter})}
          options = {[
            {value: '', name: 'Filter by Region'},
            {value: 'Africa', name: 'Africa'},
            {value: 'Americas', name: 'America'},
            {value: 'Asia', name: 'Asia'},
            {value: 'Europe', name: 'Europe'},
            {value: 'Oceania', name: 'Oceania'}
          ]}
          />
    </div>
  )
}
