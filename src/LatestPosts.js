import { SimpleGrid } from '@chakra-ui/react';
import Post from './Post';
export default function LatestPosts() {
  return (
    <SimpleGrid columns={2} spacing="40px">
      <Post />
      <Post />
      <Post />
      <Post />
    </SimpleGrid>
  );
}
