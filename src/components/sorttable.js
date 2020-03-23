import React from 'react';
import Table from "react-bootstrap/Table"

class SortTable extends React.Component {

  render() {
    let rows = [];
    for(let i = 0; i < 10; i ++) {
      rows.push(<th key={i} style={{'textAlign':'center'}}>{i}</th>);
    }
    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
          <tr>
            {rows}
          </tr>
          </thead>
        </Table>
      </>
    )
  }
}



export default SortTable
