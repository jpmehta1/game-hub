import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";


//list out what a game's properties should be looking at the RAWG api
export interface Platform{
id: number
name:string
slug:string
}

export interface Game {
    name: string;
    id: number;
    background_image: string,
    parent_platforms: {platform:Platform}[]
    metacritic: number
  }
  
const useGames = () => useData<Game>('/games')

export default useGames;

     //empty array of games
    //  const [games, setGames] = useState<Game[]>([]);
    //  const [error, setError] = useState("");
    //  const [isLoading,setLoading] = useState(false)
   

  ////when a component mounts, the [] dependencies of useEffect() hook come into play
  ////when a component unmounts, the cleanup function comes into play

  //these hooks take arrow functions
  //   useEffect(() => {
  //     const controller = new AbortController()

  //     setLoading(true)
  //   apiClient
  //   //get the games in the form of <FetchGames>
  //     .get<FetchGames>("/games",{signal:controller.signal })
  //     //then you set the games empty array to the response.data.results
  //     .then((res) => {setGames(res.data.results) 
  //     setLoading(false)})
  //     //error handling
  //     .catch((error) => {
  //     if (error instanceof CanceledError) return;
  //     //set the empty error message to the actual error message
  //       setError(error.message);
  //       setLoading(false)
  //     });
  //     //unmount - cleanup done
  //     return () => {controller.abort}
  //     //mount - dependencies played
  // },[]);

  // return {games,error,isLoading}