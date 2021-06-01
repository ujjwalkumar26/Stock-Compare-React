import React,{useEffect, useState } from 'react';
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container, Segment } from 'semantic-ui-react'

function Chart(props){
     // eslint-disable-next-line
    var [symboldata, setSymboldata] = useState([{}]);
    //console.log("here->"+ props.symbol)
    async function fetchData(){
        const apiURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+props.symbol+"&interval=5min&apikey=GN9N55H8OTMLM2ES";
        try{
            const response=await axios.get(apiURL);
            //console.log(formatsymboldata(response.data["Time Series (Daily)"]));
            await setSymboldata(formatsymboldata(response.data["Time Series (Daily)"]));
        }
        catch(err){
            console.log(err); 
        }
    }
   
    useEffect(()=>{
        fetchData(); // eslint-disable-next-line
    },[]);
    
    
    function formatsymboldata(data){
        return Object.entries(data).map(entries=>{
            const [date, pricedata] = entries;
            return{
                date,
                open:  Number(pricedata["1. open"]),
                high:  Number(pricedata["2. high"]),
                low:   Number(pricedata["3. low"]),
                close: Number(pricedata["4. close"]),
            }
        });
    }

    
    return(
        <Container className="chart">
        <Segment style={{ marginTop: '1em' }}> {props.symbol}</Segment>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={symboldata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis type="number" domain={['auto', 'auto']}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="high" stroke="#f16a70" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="low" stroke="#b1d877" />
          <Line type="monotone" dataKey="open" stroke="#8cdcda" />
          <Line type="monotone" dataKey="close" stroke="#4d4d4d" />

        </LineChart>
      </ResponsiveContainer>
     
    </Container>
    )
}
export default Chart;