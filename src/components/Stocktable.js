import React,{useState,useEffect} from 'react';
import {Container,  Table ,Label } from "semantic-ui-react";
import axios from 'axios';
function Stocktable(props){

    
    const symbol = props.symbol;
    console.log(symbol);


       // eslint-disable-next-line
       var [symboldata, setSymboldata] = useState([{}]);
       //console.log("here->"+ props.symbol)
       async function fetchData(){
           const apiURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symbol+"&interval=5min&apikey="+process.env.KEY;
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
   
    const symbolinfo= symboldata[0];

    return(
        <Container>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><Label color={props.color}ribbon>STOCK</Label> {symbol}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      
      <Table.Row>
        <Table.Cell>{symbolinfo.open}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{symbolinfo.high}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{symbolinfo.low}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{symbolinfo.close}</Table.Cell>
      </Table.Row>
    </Table.Body>
      </Table>
        </Container>
    )
}
export default Stocktable;