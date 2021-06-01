import '../styles/App.css';
import React, { useState } from 'react';
import {Menu, Container,Image } from "semantic-ui-react";
import Home from './Home';
import Compare from './Compare';
function App() {

  var [view,setView] =useState(<Home/>)
  
  return (
    <div className="App">
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header onClick={()=>{setView(<Home/>)}}>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            Stock Charts
          </Menu.Item>
          <Menu.Item as='a' onClick={()=>{setView(<Home/>);}}>Home</Menu.Item>
          <Menu.Item as='a' onClick={()=>{setView(<Compare/>);}}>Compare Stocks</Menu.Item>
        </Container>
      </Menu>
    {view}
    </div>
  );
}

export default App;
