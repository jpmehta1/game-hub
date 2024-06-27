import './App.css'
import { Box, Flex, Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import NavigationBar from './components/NavigationBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGame';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery{
  genre: Genre| null
  platform : Platform|null
  sortOrder: string
  searchText:string
}


function App(){
  //hook for selecting a genre
const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)

return <Grid templateAreas={{
  base :'"nav"   "main"',
  lg: '" nav nav" "aside main"'

}}
templateColumns = {{
base: '1fr',
lg:'200px 1fr'
  }
}
>
<GridItem  area = 'nav' >
<NavigationBar onSearch = {(searchText) => setGameQuery({...gameQuery,searchText})}></NavigationBar>
</GridItem>
<Show above = "lg">
<GridItem  area = 'aside'
paddingX = {5}
><GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList></GridItem>

</Show>
<GridItem  area = 'main'>
  <Box paddingLeft={2}>
  <GameHeading gameQuery= {gameQuery}></GameHeading>
  </Box>
  <Flex paddingLeft = {2} marginBottom = {5}>
    <Box marginRight={5}>
    <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}></PlatformSelector>
    </Box>
    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery,sortOrder})}></SortSelector>
  </Flex>
  <GameGrid gameQuery={gameQuery}></GameGrid>
</GridItem>
</Grid>

}
export default App;