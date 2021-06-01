import '../styles/App.css';
import React, { useState } from 'react';
import Chart from './Chart';
import {TickerSymbols} from './symbols';
import { Dropdown } from "semantic-ui-react";
import Symbolsearch from './Symbolsearch';
function App() {

  var [chart,setChart]=useState();
  const options= TickerSymbols.map(ds => {
    return {
        key: ds.symbol,
        text: ds.name,
        value: ds.symbol
    }
  })
  // const options =[
  //   { key: 1, text: "TSLA", value:"TSLA" },
  //   { key: 2, text: "IBM", value:"IBM" },
  //   { key: 3, text: "AAPL", value:"AAPL" }
  // ]
  
  const handleChange=(event,data)=>{
    // console.log(data);
    // console.log(data.symbol.replace("<em>","").replace("</em>",""));
    // var sym=data.symbol.replace("<em>","").replace("</em>","");
    //  if(sym==='')
    //  setChart()
    //  else 
    //  setChart(<Chart key={sym} symbol={sym}/>)
    console.log(data);
  }
  return (
    <div className="App">
         <Dropdown
          clearable
          options={options}
          onChange={handleChange}
          selection
        /> 
        {/* <Symbolsearch showChart={handleChart}/> */}
    {chart}
    </div>
  );
}

export default App;
