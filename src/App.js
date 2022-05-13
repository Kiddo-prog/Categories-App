import React from 'react';
import './App.css';
import {Heading} from '@chakra-ui/react'
import { Main } from './pages/Main';


function App() {
  return (
    <React.Fragment>
        <Heading textAlign='center' my='2em' fontSize='2em'>Select App</Heading>
      <Main />
    </React.Fragment>
  );
}
export default App;
