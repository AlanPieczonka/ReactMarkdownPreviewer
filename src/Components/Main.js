import React, { Component } from 'react';

import customMainCSS from './../css/ComponentsStyles/customMain.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';

const markdown = require( "markdown" ).markdown;
const InnerHTML = require('dangerously-set-inner-html');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
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
          <h4 className="main__h4">Just type your text</h4>
        </Row>
        <Row>
          <Col lg="6" sm="12" xs="12">
            <FormGroup>
              <Label for="inputArea">Input</Label>
              <Input type="textarea" name="text" id="inputArea" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col lg="6" sm="12" xs="12">
              <span>Markdown</span>
              <div className="outputDiv">       
                    <InnerHTML html={this.state.markdown} />
              </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
