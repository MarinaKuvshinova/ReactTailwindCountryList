import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from './UI/Button';
import RowInfo from './UI/RowInfo';

export default function CountryInfo({country}) {
  const dataArray = [
    {
        name: "Native Name",
        value: {
          value: country.nativeName
        }
    },{
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
      name: "Sub Region",
      value: {
        value: country.subregion
      }
    },{
      name: "Capital",
      value: {
        value: country.capital
      }
    }
  ];

  const dataArray2 = [
    {
      name: "Top Level Domain",
      value: {
        value: country.topLevelDomain
      }
    },{
      name: "Currencies",
      value: {
        value: country.currencies,
        nameValue: "name" 
      },
    },{
      name: "Languages",
      value:  {
        value: country.languages,
        nameValue: "name"
      }
    }
  ]

  const navigate = useNavigate();
  function renderPage(countryCode) {

      navigate(`/${countryCode.toLowerCase()}`)
  }

  return (
    <div className='grid gap-4 lg:gap-20 md:grid-cols-[minmax(500px,_1fr)_1fr] pb-10'>
        <div className='aspect-[4/2.6]'>
            <img className='h-full w-full object-cover' src={country.flag} alt={country.name} />
        </div>
        <div className='self-center'>
          <h2 className='mb-8 font-bold text-2xl'>{country.name}</h2>
          <div className='grid gap-4 grid-cols-2 text-xs'>
            <div className='space-y-2'>
                { dataArray.map(el => 
                    <RowInfo key={el.name} name = {el.name} value = {el.value} />
                )}
            </div>
            <div className='space-y-2'>
                { dataArray2.map(el => 
                    <RowInfo key={el.name} name = {el.name} value = {el.value} />
                )}
            </div>
          </div>
          <div className='text-xs flex mt-8 items-center'>
            <span className='mr-2 font-bold'>Border Countries</span>
            {country.borders && 
              <ul className='flex gap-2 flex-wrap'>
              { country.borders.map((el, index) => 
                  <li key={index}>
                    {/* <Link to={el.toLowerCase()}>{el}</Link> */}
                    <Button className=" rounded-sm shadow-[0_0_5px_rgba(0,0,0,0.2)] px-6 w-100 py-1 text-xs" onClick={()=>renderPage(el)}>{el}</Button>
                  </li>
              )}
            </ul>
          }
          </div>
        </div>
    </div>
  )
}
