import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGame'
import getCroppedImageURL from '../services/getCroppedImageURL'
import CriticScore from './criticScore'
import PlatformIcon from './PlatformIcon'

interface Props{
    games: Game
}


const gameCard = ({games}: Props) => {
  return (
   <Card >
    <Image src = {getCroppedImageURL(games.background_image)} ></Image>
    <CardBody>
        <Heading fontSize= '1xl'>
        <HStack justifyContent={'space-between'} marginBottom = {3}>
        <PlatformIcon platforms= {games.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={games.metacritic}></CriticScore>
        </HStack>
            {games.name}
        </Heading>
    </CardBody>
   </Card>
  )
}

//the map function {games.parent_platforms.map(platform => <Text> {platform.platform.name}</Text>)}
//maps the parent_platforms property of games to a text element which contains the platform's name
//we have destructured the platform property into its platform property,basically change in each
//element of the object


export default gameCard