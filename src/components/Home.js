import '../styles/App.css';
import React, { useState } from 'react';
import Chart from './Chart';
import {TickerSymbols} from './symbols';
import { Dropdown, Container } from "semantic-ui-react";
function Home(){
    var [chart,setChart]=useState(<Chart key="TSLA" symbol="TSLA" name="TESLA INC."/>);
  const options= TickerSymbols.map(ds => {
    return {
        key: ds.symbol,
        text: ds.name,
        value: ds.symbol
    }
  })
  
  const handleChange=(event,data)=>{
    var sym=data.value;
      if(sym==='')
        setChart()
      else 
        setChart(<Chart key={sym} symbol={sym} name={data.text}/>)

  }
  return (
    <div className="App">
      <Container style={{ marginTop: '7em' }}>
      <Dropdown
          placeholder='Select Stock'
          fluid
          search
          selection
          onChange={handleChange}
          options={options}
        />
          {chart}
      </Container>
        

    </div>
  );
}
export default Home;