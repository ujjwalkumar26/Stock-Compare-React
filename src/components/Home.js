import '../styles/App.css';
import React, { useState } from 'react';
import Chart from './Chart';
import {TickerSymbols} from './symbols';
import { Dropdown, Container } from "semantic-ui-react";
function Home(){
    var [chart,setChart]=useState(<Chart key="TSLA" symbol="TSLA" charttype='bigchart' dottype={true}/>);
  const options= TickerSymbols.map(ds => {
    return {
        key: ds.symbol,
        text: ds.name,
        value: ds.symbol
    }
  })
  
  const handleChange=(event,data)=>{
    var sym=data.value;
    setChart(<Chart key={sym} symbol={sym} name={data.text} charttype='bigchart' dottype={true}/>)

  }
  return (
    <div className="App">
      <Container style={{ marginTop: '5em' }}>
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