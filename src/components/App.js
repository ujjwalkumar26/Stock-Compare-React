import '../styles/App.css';
import React, { useState } from 'react';
import {Menu, Container,Image,Segment, List } from "semantic-ui-react";
import Home from './Home';
import Compare from './Compare';
function App() {

  var [view,setView] =useState(<Home/>)
  
  return (
    <div className="App">
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header onClick={()=>{setView(<Home/>)}}>
            <Image size='mini' src='../logo192.png' style={{ marginRight: '1.5em' }} />
            Stock Charts
          </Menu.Item>
          <Menu.Item as='a' onClick={()=>{setView(<Home/>);}}>Home</Menu.Item>
          <Menu.Item as='a' onClick={()=>{setView(<Compare/>);}}>Compare Stocks</Menu.Item>
        </Container>
      </Menu>
    {view}
    <Segment inverted vertical style={{ margin: '9em 0em 0em', padding: '2em 0em 2em 0em' }}>
      <Container textAlign='center'>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#' onClick={()=>{setView(<Home/>);}} >
            Home
          </List.Item>
          <List.Item as='a' target="__blank" href='https://www.alphavantage.co/documentation/'>
            API
          </List.Item>
          <List.Item as='a' target="__blank" href='https://github.com/ujjwalkumar26/Stock-Compare-React'>
            GITHUB
          </List.Item>
        </List>
      </Container>
    </Segment>
    </div>
  );
}

export default App;
