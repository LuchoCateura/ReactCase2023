import { Box, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box w="100%" h="208px">
      <Image w="100%" src="/mask.png" alt="header" />
      <ChakraLink as={ReactRouterLink} to="/">
        Home
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/posts">
        Blog
      </ChakraLink>
    </Box>
  );
}
