import React, { useEffect, useMemo, useState } from 'react'
import countryServer from '../API/countryServer';
import { useFilterAndSeacrhCountries } from '../hooks/useCountries';
import { useFetching } from '../hooks/useFetching';
import FilterPanel from '../components/FilterPanel';
import CountryList from '../components/CountryList';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([])
  const {fetching, isLoading} = useFetching(async() => {
    const res = await countryServer.getAll();
    setCountries(res)
    setFilterCountries(res)
  });
  // const [filter, setFilter] = useState({filter:'', query: ''});
  // const filterAndSearchesCountries = useFilterAndSeacrhCountries(countries, filter.filter, filter.query);

  useEffect(() => {
    fetching();
  }, []);

  function applyFilter(filterValues){

    if(!filterValues.query && !filterValues.filter)
    setFilterCountries(countries)

    else if(filterValues.query && filterValues.filter)
    setFilterCountries(countries.filter(c =>  c.name.toLowerCase().includes(filterValues.query.toLowerCase()) && c.region === filterValues.filter))

    else if(filterValues.query)
    setFilterCountries(countries.filter(c => c.name.toLowerCase().includes(filterValues.query.toLowerCase())))

    else if(filterValues.filter)
    setFilterCountries(countries.filter(c => c.region == filterValues.filter))

    else 
    setFilterCountries(countries)
  }

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-10 space-y-10">
      <FilterPanel filter={applyFilter} />
      <CountryList countries={filterCountries} />
    </div>
  )
}
