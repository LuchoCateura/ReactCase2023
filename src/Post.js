import { Box, HStack, Spacer, Text, VStack } from '@chakra-ui/react';

export default function Post({ post }) {
  return (
    <Box boxShadow="base" rounded="md" bg="white">
      <Box bgImage={post.img_url} bg="tomato" w="100%" color="white">
        <HStack p={4}>
          <Text>{post.updated_at.slice(0, 10)}</Text>
          <Spacer />
          <Text>{post.category.name}</Text>
        </HStack>
      </Box>
      <VStack>
        <Text>{post.title}</Text>
        <Text> {post.content}</Text>
      </VStack>
    </Box>
  );
}
