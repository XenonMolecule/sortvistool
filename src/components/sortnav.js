import React from 'react';
import SortTable from "./sorttable"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"

class SortNav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      sequence: this.props.sequence,
    }
  }

  maxedSteps() {
    return this.state.step >= (Math.floor((this.state.sequence.length - 10)/12));
  }

  render() {
    return (
      <Container>
        <Row>
          <SortTable version = {this.props.version}
                     sequence = {this.state.sequence}
                     index = {this.state.step}/>
        </Row>
        <Row className={'justify-content-center'}>
          <p>{"Comparisons: " + (this.maxedSteps() ?
            (this.state.step + " - FINAL") : (this.state.step + 1))}</p>
        </Row>
        <Row>
          <Col>
            <Row className={'justify-content-end'}>
              <Button variant={'primary'} size={'md'} style={{'marginRight':'25px'}}
              onClick = {() => {
                this.setState({
                  step: this.state.step - 1,
                });
              }}
              disabled = {this.state.step <= 0}> Prev </Button>
            </Row>
          </Col>
          <Col>
            <Row>
              <Button variant={'primary'} size={'md'} style={{'marginLeft':'25px'}}
              onClick = {() => {
                this.setState({
                  step: this.state.step + 1,
                });
              }} disabled = {this.maxedSteps()}> Next </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default SortNav
