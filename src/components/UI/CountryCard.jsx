import React from 'react'
import { Link } from 'react-router-dom';
import RowInfo from './RowInfo';

export default function CountryCard({country}) {
    let dataArray = [
        {
            name: "Population",
            value: {
                value: country.population
            }
        },{
            name: "Region",
            value: {
                value: country.region
            }
        },{
            name: "Capital",
            value: {
                value: country.capital
            }
        }
    ];

  return (
    <div className = "rounded-md shadow-lg overflow-hidden">
        <div className="aspect-[4/2.6]">
            <img className='h-full w-full object-cover' src={country.flag} alt={country.name} />
        </div>
        <div className='p-5 space-y-3'>
            <h4 className='font-bold '><Link className='hover:text-teal-500 transition-all duration-500' to={country.alpha3Code.toLowerCase()}>{country.name}</Link></h4>
            <div className='text-xs space-y-1'>
                { dataArray.map(el => 
                    <RowInfo key={el.name} name = {el.name} value = {el.value} />
                )}
            </div>
        </div>
    </div>
  )
}
