import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/getCroppedImageURL";

interface Props {
  //function for
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
<>
    <Heading fontSize={'2xl'} marginBottom = {3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem paddingY={1} key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit = 'cover'
              src={getCroppedImageURL(genre.image_background)}
            ></Image>
            <Button
            whiteSpace={'normal'}
            textAlign = 'left'
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
