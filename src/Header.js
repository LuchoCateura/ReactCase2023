import { Box, Image, Link } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Image src="/src/images/mask.png" alt="header" />
      <Link>Home</Link>
      <Link>Blog</Link>
    </Box>
  );
}
