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

export default function CreatePost() {
  return (
    <Box>
      <Text>Plaats een blog bericht</Text>
      <FormControl isRequired>
        <FormLabel>Berichtnaam</FormLabel>
        <Input type="text" placeholder="Geen titel" />
        <FormLabel>Categorie</FormLabel>
        <Select placeholder="Geen categorie">
          <option value="option1">tech</option>
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
