import { useEffect, useState } from 'react';
import { SimpleGrid, Button, Box } from '@chakra-ui/react';
import Post from './Post';
import getPosts from '../Api/getPosts';

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
        <SimpleGrid columns={2} spacing="40px">
          {latestPosts.data?.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </SimpleGrid>
      }
      <Button
        onClick={handleGetMorePosts}
        colorScheme="orange"
        borderRadius="20px"
      >
        Laad meer
      </Button>
    </Box>
  );
}
