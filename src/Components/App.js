import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Menu from './Menu/Menu.tsx';
// import youtube from '../api/youtube'

class App extends Component {

  render() {
    return (
   <BrowserRouter>
      <Menu/>   
            
   </BrowserRouter> 
    );
  }
}

export default App;
