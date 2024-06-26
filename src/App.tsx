import { useState } from 'react'
import './App.css'
import React from 'react';
import { Button, ButtonGroup ,Grid, GridItem, Show} from '@chakra-ui/react'
import NavigationBar from './components/NavigationBar';
import GameGrid from './components/GameGrid';


function App(){
return <Grid templateAreas={{
  base :'"nav"   "main"',
  lg: '" nav nav" "aside main"'

}}>
<GridItem  area = 'nav' >
<NavigationBar></NavigationBar>
</GridItem>
<Show above = "lg">
<GridItem  area = 'aside'>Aside</GridItem>
</Show>
<GridItem  area = 'main'>
  <GameGrid></GameGrid>
</GridItem>
</Grid>

}

export default App;