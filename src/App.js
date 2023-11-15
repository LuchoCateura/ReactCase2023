import React from 'react';
import { useEffect } from 'react';
import getCategories from './Api/getCategories.js';
import getPosts from './Api/getPosts.js';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import Header from './Header';
import CreatePost from './CreatePost';
import LatestPosts from './LatestPosts';
import Footer from './Footer';

function App() {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(2, 1fr)"
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem rowSpan={1} colSpan={2} area={'header'}>
          <Header />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} area={'nav'}>
          <CreatePost />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} area={'main'}>
          <LatestPosts />
        </GridItem>
        <GridItem rowSpan={2} colSpan={2} area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
