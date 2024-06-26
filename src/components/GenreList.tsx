import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import useData from '../hooks/useData'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageURL from '../services/getCroppedImageURL'

const GenreList = () => {
    const {data,isLoading,error} = useGenres()

    if(error) return null
    if(isLoading) return <Spinner></Spinner>
  return (
    <List >
      {data.map(genre => <ListItem  paddingY = {1} key = {genre.id}>
        <HStack>
          <Image boxSize = '32px' borderRadius={8}
          src = {getCroppedImageURL(genre.image_background)}>
            </Image>  
            <Text fontSize='lg'>{genre.name}</Text>
        </HStack>
        </ListItem>)}  
    </List>
  )
}

export default GenreList