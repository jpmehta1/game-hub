import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGame'

interface Props{
    games: Game
}


const gameCard = ({games}: Props) => {
  return (
   <Card borderRadius= '10px ' overflow= 'hidden'>
    <Image src = {games.background_image} ></Image>
    <CardBody>
        <Heading fontSize= '2xl'>
            {games.name}
        </Heading>
    </CardBody>
   </Card>
  )
}

export default gameCard