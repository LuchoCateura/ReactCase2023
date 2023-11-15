import { Box, SimpleGrid } from '@chakra-ui/react';

export default function LatestPosts() {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.

    <SimpleGrid columns={2} spacing="40px">
      <Box bg="tomato" height="80px">
        post 1
      </Box>
      <Box bg="tomato" height="80px">
        post 2
      </Box>
      <Box bg="tomato" height="80px">
        {' '}
        post 3
      </Box>
      <Box bg="tomato" height="80px">
        post 4
      </Box>
    </SimpleGrid>
  );
}
