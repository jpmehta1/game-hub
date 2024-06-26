
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./gameCard";

//to store the game objects
const GameGrid = () => {

    //destructure the useGames () custom hook into games and error, see custom hooks don't always have
    //to return functions,
  const {games,error} = useGames()

  //the columns thing is nice, you can render different number of columns based on the size of the device
  //we have a simple grid on top of which we insert game cards in the columns, chakra ui takes care of inserting  
  //the cards in the columns.
  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid columns={{sm: 1,md:2,lg:3,xl:5}} padding = '10px'spacing =  {10}>
        {games.map((game) => (
          <GameCard key = {game.id} games = {game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

