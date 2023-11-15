import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <p>Hello world</p>
    </ChakraProvider>
  );
}

export default App;