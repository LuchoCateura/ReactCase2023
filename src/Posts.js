import { useEffect, useState } from 'react';
import {
  SimpleGrid,
  Box,
  Text,
  Button,
  HStack,
  Center,
} from '@chakra-ui/react';
import Post from './components/Post';
import getPosts from './Api/getPosts';
import Layout from './Layout';

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
    <Layout>
      <Box h="659px" px="162px" mt="64px">
        {
          <SimpleGrid columns={4} spacing="24px">
            {posts.data?.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </SimpleGrid>
        }
        <Center pt="24px">
          <HStack spacing={4}>
            <Button onClick={handlePrevious} colorScheme="orange">
              Previous
            </Button>
            <Text fontWeight="bold">{posts.current_page}</Text>
            <Button onClick={handleNext} colorScheme="orange" px="30px">
              Next
            </Button>
          </HStack>
        </Center>
      </Box>
    </Layout>
  );
}
