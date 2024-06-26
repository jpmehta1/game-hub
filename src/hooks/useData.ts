import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Game } from './useGame';



interface FetchResponse <T>{
    count:number
    results: T[]
}


const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false)
  
    //these hooks take arrow functions

    //when a component mounts, the [] dependencies of useEffect() hook come into play
    //when a component unmounts, the cleanup function comes into play

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
      apiClient
      //get the games in the form of <FetchGames>
        .get<FetchResponse<T>>(endpoint,{signal:controller.signal })
        //then you set the games empty array to the response.data.results
        .then((res) => {setData(res.data.results) 
        setLoading(false)})
        //error handling
        .catch((error) => {
        if (error instanceof CanceledError) return;
        //set the empty error message to the actual error message
          setError(error.message);
          setLoading(false)
        });
        //unmount - cleanup done
        return () => {controller.abort}
        //mount - dependencies played
    },[]);

    return {data,error,isLoading}
}

export default useData