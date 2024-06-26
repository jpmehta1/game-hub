
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";

//to store the game objects
const GameGrid = () => {

    //destructure the useGames () custom hook into games and error, see custom hooks don't always have
    //to return functions,
  const {games,error} = useGames()

  return (
    <>
      {error && <Text> {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

