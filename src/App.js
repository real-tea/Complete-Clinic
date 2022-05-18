import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import Login  from "./components/Login/Login";
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme = {theme}>
      <Login/>
    </ChakraProvider>
  );
}

export default App;
