import React from 'react';
import './App.css';
import Button from './components/Button.js';

const styles={
  fontFamily: 'sans-serif',
  marginLeft:100,
  marginTop:60,
}


function App() {
  return (
    <div style={styles}>
      <Button color="amethyst" bgColor="midnightBlue" icon="smile">
        Click me
      </Button>
    </div>
  );
}

export default App;
