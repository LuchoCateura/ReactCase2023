import { useEffect, useState } from 'react';
import { SimpleGrid, Box, Text, Button, HStack } from '@chakra-ui/react';
import Post from './Post';
import getPosts from './Api/getPosts';

export default function Posts() {
  const [posts, setPosts] = useState({});
  const [params, setParams] = useState({
    page: 1,
    perPage: 8,
    sortDirection: 'desc',
  });

  useEffect(() => {
    getPosts(setPosts, params);
  }, [params]);

  function handlePrevious() {
    posts.current_page > 1 &&
      setParams({
        page: posts.current_page - 1,
        perPage: 8,
        sortDirection: 'desc',
      });
  }

  function handleNext() {
    posts.current_page < posts.last_page &&
      setParams({
        page: posts.current_page + 1,
        perPage: 8,
        sortDirection: 'desc',
      });
  }

  return (
    <Box overflow="auto" h="659px">
      {
        <SimpleGrid columns={4} spacing="40px">
          {posts.data?.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </SimpleGrid>
      }
      <HStack mt={5}>
        <Button onClick={handlePrevious} colorScheme="orange">
          Previous
        </Button>
        <Text>{posts.current_page}</Text>
        <Button onClick={handleNext} colorScheme="orange">
          Next
        </Button>
      </HStack>
    </Box>
  );
}
