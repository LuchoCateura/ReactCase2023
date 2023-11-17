import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
  Textarea,
  Select,
  Button,
  Center,
} from '@chakra-ui/react';
import getCategories from '../Api/getCategories';
import { useEffect, useState } from 'react';
import createPost from '../Api/createPost';
import './../styles.css';

export default function CreatePost() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState('Geen titel');
  const [selectedCategory, setSelectedCategory] = useState({});
  const [image, setImage] = useState({});
  const [content, setContent] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  function handleCategorySelection(e) {
    const selectedCat = categories.find(cat => cat.name === e.target.value);
    setSelectedCategory(selectedCat);
  }

  function handleSubmit() {
    if (title && selectedCategory && image && content) {
      setIsError(false);

      createPost({
        title: title,
        content: content,
        categorie_id: selectedCategory.id,
        image: image,
      });
    } else {
      setIsError(true);
    }
  }

  return (
    <Box w="451px" h="659px">
      <Text fontSize="24px" align="left" fontWeight="bold">
        Plaats een blog bericht
      </Text>
      <FormControl isRequired>
        <FormLabel className="form-label">Berichtnaam</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          onFocus={() => setTitle('')}
        />
        <FormLabel className="form-label">Categorie</FormLabel>
        <Select
          value={selectedCategory.name}
          placeholder="Geen Categorie"
          onChange={handleCategorySelection}
        >
          {categories.map(cat => (
            <option key={cat.id}>{cat.name}</option>
          ))}
        </Select>
        <FormLabel className="form-label">Header afbeelding</FormLabel>
        <Input
          py="5px"
          type="file"
          onChange={e => setImage(e.target.files[0])}
        />
        <FormLabel className="form-label">Bericht</FormLabel>
        <Textarea
          h="237px"
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        {isError && (
          <FormHelperText color="red">
            Vul alstublieft alle velden in.
          </FormHelperText>
        )}
      </FormControl>
      <Center mt="24px">
        <Button
          onClick={handleSubmit}
          colorScheme="orange"
          borderRadius="20px"
          px="48px"
        >
          Bericht aanmaken
        </Button>
      </Center>
    </Box>
  );
}
