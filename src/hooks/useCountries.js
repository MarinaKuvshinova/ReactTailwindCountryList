import { useMemo } from "react";

export const useFilterCountries = (countries, filter) => {
    const filterCountryes = useMemo(() => {
        if (filter.length <= 0)  {
            return countries;
        } else {
            return countries.filter(country => country.region === filter);
        }
    }, [filter, countries])

    return filterCountryes;
}

export const useFilterAndSeacrhCountries = (countries, filter, searchQuery) => {
    console.log(searchQuery)
    const filterCountries = useFilterCountries(countries, filter);
    const filterAndSearchesCountries = useMemo(() => {
        if (searchQuery.length <= 0) {
            return filterCountries;
        }
        return filterCountries.filter(country => country.name.toLowerCase().includes(searchQuery.toLowerCase()));
      }, [filterCountries, searchQuery])

    return filterAndSearchesCountries;
}
