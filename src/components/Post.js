import { Box, HStack, Spacer, Text } from '@chakra-ui/react';
import './../styles.css';

export default function Post({ post }) {
  return (
    <Box boxShadow="base" bg="white" w="285px" h="217px">
      <Box bgImage={post.img_url} bg="tomato" w="100%">
        <HStack px={4} pt="72px" pb="8px" className="post-hline">
          <Text>{post.updated_at.slice(0, 10)}</Text>
          <Spacer />
          <Text>{post.category.name}</Text>
        </HStack>
      </Box>
      <Box w="253px" h="113px" overflow="hidden" p="16px">
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
