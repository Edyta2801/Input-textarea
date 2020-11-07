import React from 'react';
import './App.css';
import {Button, Input, Textarea} from './components/Form';


const styles={
  fontFamily: 'sans-serif',
  textAlign:'center'
}


function App() {
  return (
    <div style={styles}>
      <Button color="amethyst" bgColor="midnightBlue" icon="smile">
        Click me
      </Button>
      <Input/>
      <Textarea/>
    </div>
  );
}

export default App;
