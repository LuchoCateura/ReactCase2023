import { Flex, Spacer } from '@chakra-ui/react';
import CreatePost from './components/CreatePost';
import LatestPosts from './components/LatestPosts';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Flex px="162px" mt="64px">
        <CreatePost />
        <Spacer />
        <LatestPosts />
      </Flex>
    </Layout>
  );
}

export default App;
