import { Box, Image, TabList, Tab, Tabs } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      <Image src="/src/images/mask.png" alt="header" />
      <Tabs align="end">
        <TabList>
          <Tab>Home</Tab>
          <Tab>Blog</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}
