import './App.css'
import { Grid, GridItem, Show} from '@chakra-ui/react'
import NavigationBar from './components/NavigationBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGame';


function App(){
  //hook for selecting a genre
const[selectedGenre,setSelectedGenre] = useState<Genre | null>(null)
const[selectedPlatform,setSelectedPlatform] = useState<Platform|null>(null)

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
<NavigationBar></NavigationBar>
</GridItem>
<Show above = "lg">
<GridItem  area = 'aside'
paddingX = {5}
><GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}></GenreList></GridItem>

</Show>
<GridItem  area = 'main'>
  <PlatformSelector selectedPlatform = {selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}></PlatformSelector>
  <GameGrid selectedPlatform = {selectedPlatform} selectedGenre={selectedGenre}></GameGrid>
</GridItem>
</Grid>

}
export default App;