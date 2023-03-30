import React from 'react'

export default function Select({options, defaultValue, value, onChange}) {
  return (
    <select className = "shadow-md text-sm text-slate-400 px-4 rounded-md h-12" value={value} onChange={event => onChange(event.target.value)}>
      {/* <option>defaultValue</option> */}
      {options.map(option => 
        <option key={option.name} value={option.value}>{option.name}</option>
      )}
    </select>
  )
}
