import React, { useState } from 'react';
import {Container,Grid,Dropdown,Header,Icon} from "semantic-ui-react";
import Tableformat from './Tableformat';
import Stocktable from './Stocktable';
import Chart from './Chart';
import {Data} from './data';
import { Tab } from 'semantic-ui-react'

function Compare(){
    var [table1,setTable1] = useState(<Stocktable color="orange" key="AAPL" symbol="AAPL"/>);
    var [table2,setTable2] = useState(<Stocktable color="teal" key="GOOGL" symbol="GOOGL"/>);
    var [graph1,setGraph1]= useState(<Chart key="AAPL" symbol="AAPL" charttype='smallchart' dottype={false}/>)
    var [graph2,setGraph2]=useState(<Chart key="GOOGL" symbol="GOOGL" charttype="smallchart" dottype={false}/>)
    var [des1,setDes1]= useState(Data.find(element => element.symbol === "AAPL" ).description)
    var [des2,setDes2]=useState(Data.find(element => element.symbol === "GOOGL" ).description);

    const options= Data.map(ds => {
        return {
            key: ds.symbol,
            text: ds.company,
            value: ds.symbol
        }
      })
    const handleChange1=(event,data)=>{
        var sym=data.value;
        setTable1(<Stocktable color="orange" key={sym} symbol={sym}/>);
        setGraph1(<Chart key={sym} symbol={sym} charttype='smallchart' dottype={false}/>);
        setDes1(Data.find(element => element.symbol === sym ).description);
       
    }
    const handleChange2=(event,data)=>{
        var sym=data.value;
        setTable2(<Stocktable color="teal" key={sym} symbol={sym}/>);
        setGraph2(<Chart key={sym} symbol={sym} charttype='smallchart' dottype={false}/>);
        setDes2(Data.find(element => element.symbol === sym ).description);
       
    }
    const panes = [
        { menuItem: "Company 1", render: () => <Tab.Pane>{des1}</Tab.Pane> },
        { menuItem: "Company 2", render: () => <Tab.Pane>{des2}</Tab.Pane> },
      ]       
    
    return (<Container style={{ marginTop: '5em' }}>
        <Header as='h2' textAlign='center'>
        
        <Header.Content><Icon name='balance scale' />Compare stocks</Header.Content>
        </Header>
        <Container>
            <Grid>
                <Grid.Row>
                <Grid.Column width={8}>
                <Dropdown
                    placeholder='Select Stock'
                    fluid
                    search
                    selection
                    onChange={handleChange1}
                    options={options}
                />    
                </Grid.Column>
                <Grid.Column width={8}>
                <Dropdown
                    placeholder='Select Stock'
                    fluid
                    search
                    selection
                    onChange={handleChange2}
                    options={options}
                />        
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        <Container >
        <Grid>
            <Grid.Row>
                 <Grid.Column width={5}>
                        <Tableformat/>
                </Grid.Column>
                <Grid.Column width={5}>
                        {table1}
                </Grid.Column>
                <Grid.Column width={5}>
                        {table2}
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
        <Grid>
                <Grid.Row>
                <Grid.Column width={8}>
                {graph1}
                </Grid.Column>
                <Grid.Column width={8}>
                {graph2}
                </Grid.Column>
                </Grid.Row>
        </Grid>
        <Container  style={{ marginTop: '5em' }}>
        <Tab panes={panes}/>
        </Container> 
        
        </Container>
    )
}
export default Compare;