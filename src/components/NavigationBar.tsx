import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch:(searchText: string) => void
}

const NavigationBar = ({onSearch}: Props) => {
  return (
    <HStack padding = '20px'>
    <Image src = {logo} boxSize = '60px'></Image>
    <SearchInput onSearch={onSearch}></SearchInput>
    <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavigationBar