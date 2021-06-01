import '../styles/App.css';
import React, { useState } from 'react';
import {Menu, Container,Image } from "semantic-ui-react";
import Home from './Home';
function App() {
  var [view,setView] =useState()
  return (
    <div className="App">
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header onClick={()=>{setView(<Home/>)}}>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            Project Name
          </Menu.Item>
          <Menu.Item as='a' onClick={()=>{setView(<Home/>)}}>Home</Menu.Item>
        </Container>
      </Menu>
    {view}
    </div>
  );
}

export default App;
