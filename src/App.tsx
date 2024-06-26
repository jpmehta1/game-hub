import './App.css'
import { Grid, GridItem, Show} from '@chakra-ui/react'
import NavigationBar from './components/NavigationBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';


function App(){
return <Grid templateAreas={{
  base :'"nav"   "main"',
  lg: '" nav nav" "aside main"'

}}>
<GridItem  area = 'nav' >
<NavigationBar></NavigationBar>
</GridItem>
<Show above = "lg">
<GridItem  area = 'aside'><GenreList></GenreList></GridItem>

</Show>
<GridItem  area = 'main'>
  <GameGrid></GameGrid>
</GridItem>
</Grid>

}

export default App;