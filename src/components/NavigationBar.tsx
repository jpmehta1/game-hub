import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const NavigationBar = () => {
  return (
    <HStack justifyContent= 'space-between' padding = '20px'>
    <Image src = {logo} boxSize = '60px'></Image>
    <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavigationBar