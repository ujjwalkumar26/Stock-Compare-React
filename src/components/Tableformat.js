import React from 'react';
import {Container, Label,  Table  } from "semantic-ui-react";
function Tableinfo(){
    return(
        <Container>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><Label ribbon>STOCK</Label> SYMBOL</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      
      <Table.Row>
        <Table.Cell>OPEN</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>HIGH</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>LOW</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>CLOSE</Table.Cell>
      </Table.Row>
    </Table.Body>
      </Table>
        </Container>
    )
}
export default Tableinfo;