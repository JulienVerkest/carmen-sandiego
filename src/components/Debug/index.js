import React, { Component } from 'react';
import {  Row, Col } from 'react-bootstrap';
import './index.css';

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'key';
          } else {
              cls = 'string';
          }
      } else if (/true|false/.test(match)) {
          cls = 'boolean';
      } else if (/null/.test(match)) {
          cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
  });
}

class Debug extends Component {
  constructor(props) {
    super(props);
    this.myPre = null;
    this.setMyPre = element => {
      this.myPre = element;
    }
    this.appendJson = this.appendJson.bind(this);
  }

  appendJson() {
    this.myPre.innerHTML = syntaxHighlight(JSON.stringify(this.props.state))
  }

  componentDidMount() {
    // this.appendJson();
  }

  render() {
    const { state } = this.props;
    return (
      <Row>
        <Col>
          <div>
            <pre className="pre" ref={this.setMyPre}>
              {JSON.stringify(this.props.state)}
            </pre>

          </div>
        </Col>
      </Row>
    );
  }
}


export default Debug;