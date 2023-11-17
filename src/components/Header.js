import { Box, Link as ChakraLink, HStack, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box
      w="100%"
      h="208px"
      bgImage="url('/mask.png')"
      bgSize="100%"
      bgRepeat="no-repeat"
    >
      <Box w="240px" h="57px" ml="162px" pt="32px">
        <Image src="/logo.png" alt="social-brothers-logo" />
      </Box>
      <HStack w="123px" color="white" ml="1200px" spacing="32px">
        <ChakraLink fontWeight="600" as={ReactRouterLink} to="/" isActive>
          Home
        </ChakraLink>
        <ChakraLink fontWeight="600" as={ReactRouterLink} to="/posts">
          Blog
        </ChakraLink>
      </HStack>
    </Box>
  );
}
