import { useEffect, useState } from 'react';
import { SimpleGrid, Button, Box, Center } from '@chakra-ui/react';
import Post from './Post';
import getPosts from '../Api/getPosts';
import './../styles.css';

export default function LatestPosts() {
  const [latestPosts, setLatestPosts] = useState({});
  const [params, setParams] = useState({
    page: 1,
    perPage: 4,
    sortDirection: 'desc',
  });

  useEffect(() => {
    getPosts(setLatestPosts, params);
  }, [params]);

  function handleGetMorePosts() {
    setParams({
      page: 1,
      perPage: params.perPage + 4,
      sortDirection: 'desc',
    });
  }

  return (
    <Box overflow="auto" w="642px" h="659px">
      {
        <SimpleGrid columns={2} spacing="24px">
          {latestPosts.data?.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </SimpleGrid>
      }
      <Center mt="114px">
        <Button
          onClick={handleGetMorePosts}
          colorScheme="orange"
          borderRadius="20px"
          px="48px"
        >
          Laad meer
        </Button>
      </Center>
    </Box>
  );
}
