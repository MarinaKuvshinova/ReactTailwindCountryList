import React, { useEffect, useState } from 'react'

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    // const [data, setDate] = useState([]);

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
            // setDate(recvestData);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false);
        }
    };

    // useEffect( () =>{
    //     fetching();
    // }, []);

    return {fetching, isLoading, error}
};

