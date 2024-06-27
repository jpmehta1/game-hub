import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGame'
import usePlatforms from '../hooks/usePlatforms'


interface Props{
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}
const SortSelector = () => {
  const { data,error } = usePlatforms()
  if(error) return null
  return (
    <Menu>
        <MenuButton as = {Button} rightIcon = {<BsChevronDown></BsChevronDown>}> 
      Order by: Relevance
        </MenuButton>
        <MenuList>
        <MenuItem> Relevance </MenuItem>
        <MenuItem> Date Added </MenuItem>
        <MenuItem> Name </MenuItem>
        <MenuItem> Release Date </MenuItem>
        <MenuItem> Popularity </MenuItem>
        <MenuItem> Averaghj- pe Rating </MenuItem>
        </MenuList>
        
    </Menu>
  )
}


export default SortSelector
