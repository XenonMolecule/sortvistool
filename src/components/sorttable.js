import React from 'react';
import Table from "react-bootstrap/Table"
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SortTable extends React.Component {

  constructor(props) {
    super(props);
    let index = 10;
    let history = [];
    let swapHist = [];
    history.push(props.sequence.slice(0,10));
    while(index < props.sequence.length) {
      swapHist.push(props.sequence.slice(index, index+2));
      history.push(props.sequence.slice(index+2,index+12));
      index+=12;
    }
    this.state = {
      history: history,
      swapHist: swapHist,
    }
  }

  determinePointerCombo(i) {
    let output = [];
    if(this.state.history[this.props.index][i] === this.state.swapHist[this.props.index][0]) {
      output.push(<FontAwesomeIcon icon={faAngleUp} style={{'color':'red'}}/>)
    }
    if(this.state.history[this.props.index][i] === this.state.swapHist[this.props.index][1]) {
      output.push(<FontAwesomeIcon icon={faAngleUp} style={{'color':'blue'}}/>)
    }
    return output;
  }

  render() {
    const currSequence = this.state.history[this.props.index];
    let headers = [];
    let rows = [];
    let pointers = [];
    for(let i = 0; i < currSequence.length; i ++) {
      headers.push(<th key={i} style={{'textAlign':'center'}}>{i}</th>);
      rows.push(<td key={currSequence[i]} style={{'textAlign':'center'}}>{currSequence[i]}</td>);
      pointers.push(<td key={i} style={{'textAlign':'center'}}>{this.determinePointerCombo(i)}</td>);
    }
    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
          <tr>
            {headers}
          </tr>
          </thead>
          <tbody>
          <tr>
            {rows}
          </tr>
          <tr>
            {pointers}
          </tr>
          </tbody>
        </Table>
      </>
    )
  }
}



export default SortTable
