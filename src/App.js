import React from 'react';
import './App.css';
// import { Button, Input, Textarea } from './components/Form';
// import Menu from './BEM-style/Menu/Menu';
// import Menu from './SASS/Menu/Menu';
// import Menu from './StyleComponents/Menu/Menu';
import Menu from './Material UI/Menu/Menu';

// import Button from './SASS/Button/Button';

import { Button } from '@material-ui/core';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}


function App() {
  return (
    <div className='App'>
      <Menu />
      {/* <Button /> */}
      <Button color='secondary'>Hello World </Button>
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
