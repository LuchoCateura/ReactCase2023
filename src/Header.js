import { Box, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Image src="/src/images/mask.png" alt="header" />
      <ChakraLink as={ReactRouterLink} to="/">
        Home
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/posts">
        Blog
      </ChakraLink>
    </Box>
  );
}
