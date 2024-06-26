import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGame'
import PlatformIcon from './PlatformIcon'

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
        <PlatformIcon platforms= {games.parent_platforms.map(p => p.platform)}/>
    </CardBody>
   </Card>
  )
}

//the map function {games.parent_platforms.map(platform => <Text> {platform.platform.name}</Text>)}
//maps the parent_platforms property of games to a text element which contains the platform's name
//we have destructured the platform property into its platform property,basically change in each
//element of the object


export default gameCard