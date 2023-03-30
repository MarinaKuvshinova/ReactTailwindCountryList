import React from 'react'
import CountryCard from './UI/CountryCard'

export default function CountryList({countries}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {
        countries.map((country, index) => 
          <CountryCard key={index} country = {country} />
        )
      }
    </div>
  )
}
