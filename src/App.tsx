import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {MyProject} from './LucidityAssignment/MyProject'

function App() {
  return (
   <ChakraProvider>
      <MyProject/>
   </ChakraProvider>
  );
}

export default App;
