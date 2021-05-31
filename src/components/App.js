import '../styles/App.css';
import React, { useState } from 'react';
import Chart from './Chart';
import { Dropdown } from "semantic-ui-react";

function App() {

  var [chart,setChart]=useState();

  const options =[
    { key: 1, text: "TSLA", value:"TSLA" },
    { key: 2, text: "IBM", value:"IBM" },
    { key: 3, text: "AAPL", value:"AAPL" }
  ]
  
  const handleChange=(event,data)=>{
    if(data.value==='')
    setChart()
    else 
    setChart(<Chart key={data.value} symbol={data.value}/>)
  }
  return (
    <div className="App">
        <Dropdown
          clearable
          options={options}
          onChange={handleChange}
          selection
        />
    {chart}
    </div>
  );
}

export default App;
