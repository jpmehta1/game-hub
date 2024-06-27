import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavigationBar = () => {
  return (
    <HStack padding = '20px'>
    <Image src = {logo} boxSize = '60px'></Image>
    <SearchInput></SearchInput>
    <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavigationBar