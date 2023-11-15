import { Box, HStack, Text, VStack } from '@chakra-ui/react';

export default function Post({ post }) {
  return (
    <Box boxShadow="base" rounded="md" bg="white">
      <Box bgImage={post.img_url} bg="tomato" w="100%" color="white">
        <HStack spacing="200">
          <Text>{post.updated_at.slice(0, 10)}</Text>
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
