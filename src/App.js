import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Textarea from './components/Textarea';



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
