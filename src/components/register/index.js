import React, { Component } from 'react';
import { Col, Row, Button, Well } from "react-bootstrap";
import Conformation from './conformation';
import RegisterComponent from './register';
class Register extends Component {
  render() {
    return (
        <Well className="login-well">
              {/* <RegisterComponent/> */}
              <Conformation/>
        </Well>
    );
  }
}

export default Register;
