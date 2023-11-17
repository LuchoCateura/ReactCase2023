import { Box, HStack, Spacer, Text } from '@chakra-ui/react';

export default function Post({ post }) {
  return (
    <Box boxShadow="base" rounded="md" bg="white" w="285px" h="217px">
      <Box bgImage={post.img_url} bg="tomato" w="100%">
        <HStack color="white" p={4}>
          <Text>{post.updated_at.slice(0, 10)}</Text>
          <Spacer />
          <Text>{post.category.name}</Text>
        </HStack>
      </Box>
      <Box w="253px" h="113px">
        <Text fontSize="24px" align="left" fontWeight="bold">
          {post.title}
        </Text>
        <Text fontSize="12px" color="#868686">
          {post.content}
        </Text>
      </Box>
    </Box>
  );
}
