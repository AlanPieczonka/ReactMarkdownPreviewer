import React, { Component } from 'react';

import customMainCSS from './../css/ComponentsStyles/customMain.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

const markdown = require( "markdown" ).markdown;
const InnerHTML = require('dangerously-set-inner-html')

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "initial value"
    }
    this.handleChange = this.handleChange.bind(this); //or arrow function
  }

  handleChange(event){
    const updatedMarkdown = markdown.toHTML(event.target.value); //Immutability
    this.setState({markdown: updatedMarkdown});
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg="6" sm="12" xs="12">
            <FormGroup>
              <Label for="inputArea">Input</Label>
              <Input type="textarea" name="text" id="inputArea" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col lg="6" sm="12" xs="12">
              <span>Output</span>
              <div className="outputDiv">
                  <div>
                    <InnerHTML html={this.state.markdown} />
                  </div>
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
