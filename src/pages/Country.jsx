import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import countryServer from '../API/countryServer';
import CountryInfo from '../components/CountryInfo';
import Button from '../components/UI/Button';
import { useFetching } from '../hooks/useFetching';

export default function Country() {
    const param = useParams();
    const [country, setCountry] = useState(null);
    const {fetching, isLoading} = useFetching(async() => {
        const res = await countryServer.getCountry(param.name);
        setCountry(res);
    });
    const navigate = useNavigate();

    useEffect(() => {
      if(!param) return
        
      fetching();

       
    }, [param])

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-10 space-y-10">
        <Button className="flex items-center rounded-md shadow-md px-6 w-100 py-4 h-10 text-sm " onClick={() => navigate(-1)}>
          <svg className="w-4 h-4 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Back</span>
        </Button>
        {country && <CountryInfo country={country}/>}
    </div>
  )
}
