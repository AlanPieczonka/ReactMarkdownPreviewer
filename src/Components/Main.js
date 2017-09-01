import React, { Component } from 'react';

import customMainCSS from './../css/ComponentsStyles/customMain.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

var markdown = require( "markdown" ).markdown;
const InnerHTML = require('dangerously-set-inner-html')


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "initial value"
    }
    this.updateMarkdown = this.updateMarkdown.bind(this); //or arrow function
  }

  updateMarkdown(event){
    console.log("markdown updated!");
    this.setState({markdown: markdown.toHTML(event.target.value)});
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg="6" sm="12" xs="12">
            <FormGroup>
              <Label for="inputArea">Input</Label>
              <Input type="textarea" name="text" id="inputArea" value={this.state.value} onChange={this.updateMarkdown}/>
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
