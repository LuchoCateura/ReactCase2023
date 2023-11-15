import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Select,
  Button,
} from '@chakra-ui/react';
import getCategories from './Api/getCategories';
import { useEffect, useState } from 'react';

export default function CreatePost() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <Box>
      <Text>Plaats een blog bericht</Text>
      <FormControl isRequired>
        <FormLabel>Berichtnaam</FormLabel>
        <Input type="text" placeholder="Geen titel" />
        <FormLabel>Categorie</FormLabel>
        <Select placeholder="Geen categorie">
          {categories.map(cat => (
            <option key={cat.id}>{cat.name}</option>
          ))}
        </Select>
        <FormLabel>Header afbeelding</FormLabel>
        <Input type="file" />
        <FormLabel>Bericht</FormLabel>
        <Textarea type="text" />
      </FormControl>
      <Button colorScheme="orange" borderRadius="20px">
        Bericht aanmaken
      </Button>
    </Box>
  );
}
