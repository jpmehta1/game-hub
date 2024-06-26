import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


//list out what a game's properties should be looking at the RAWG api
export interface Game {
    name: string;
    id: number;
    background_image: string
  }
  
  //list out what you want to fetch
  interface FetchGames {
    count: number;
    results: Game[];
  }
  
const useGames = () => {
     //empty array of games
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    //these hooks take arrow functions

    //when a component mounts, the [] dependencies of useEffect() hook come into play
    //when a component unmounts, the cleanup function comes into play

    useEffect(() => {
        const controller = new AbortController()
      apiClient
      //get the games in the form of <FetchGames>
        .get<FetchGames>("/games",{signal:controller.signal })
        //then you set the games empty array to the response.data.results
        .then((res) => setGames(res.data.results))
       
        //error handling
        .catch((error) => {
        if (error instanceof CanceledError) return;
        //set the empty error message to the actual error message
          setError(error.message);
        });
        //unmount - cleanup done
        return () => {controller.abort}
        //mount - dependencies played
    },[]);

    return {games,error}

}

export default useGames;

