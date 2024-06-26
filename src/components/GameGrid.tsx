
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./gameCard";
import GameCardContainer from "./GameCardContainer";
import CardSkeleton from "./Skeleton";

//to store the game objects
const GameGrid = () => {

    //destructure the useGames () custom hook into games and error, see custom hooks don't always have
    //to return functions,
  const {data,error,isLoading} = useGames()
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  //the columns thing is nice, you can render different number of columns based on the size of the device
  //we have a simple grid on top of which we insert game cards in the columns, chakra ui takes care of inserting  
  //the cards in the columns.
  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid columns={{sm: 1,md:2,lg:3,xl:5}} padding = '10px'spacing =  {3}>
        {isLoading && skeletons.map(skeleton => <GameCardContainer><CardSkeleton key = {skeleton}/></GameCardContainer> )}
        {data.map((game) => (
         <GameCardContainer>
        <GameCard key = {game.id} games = {game}></GameCard>
         </GameCardContainer> 
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;

