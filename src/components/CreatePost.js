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
} from '@chakra-ui/react';
import getCategories from '../Api/getCategories';
import { useEffect, useState } from 'react';
import createPost from '../Api/createPost';

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
    <Box>
      <Text>Plaats een blog bericht</Text>
      <FormControl isRequired>
        <FormLabel>Berichtnaam</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <FormLabel>Categorie</FormLabel>
        <Select
          value={selectedCategory.name}
          placeholder="Geen Categorie"
          onChange={handleCategorySelection}
        >
          {categories.map(cat => (
            <option key={cat.id}>{cat.name}</option>
          ))}
        </Select>
        <FormLabel>Header afbeelding</FormLabel>
        <Input type="file" onChange={e => setImage(e.target.files[0])} />
        <FormLabel>Bericht</FormLabel>
        <Textarea
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

      <Button onClick={handleSubmit} colorScheme="orange" borderRadius="20px">
        Bericht aanmaken
      </Button>
    </Box>
  );
}
