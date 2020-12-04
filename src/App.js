import React from 'react';
import './App.css';
// import { Button, Input, Textarea } from './components/Form';
import Menu from './BEM-styl/Menu/Menu';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}


function App() {
  return (
    <div className='App'>
      <Menu />
    </div>




    // <div style={styles}>
    //   <Button color="amethyst" bgColor="midnightBlue" icon="smile">
    //     Click me
    //   </Button>
    //   <Input/>
    //   <Textarea/>
    // </div>
  );
}

export default App;
