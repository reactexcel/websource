import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import back from '../../assets/back.png';

import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import Register from '../../components/register/index';

import './login.css'

class LoginContainer extends Component {
  render() {
    return (
      <div className="login-view">
        <Header/>
        <Row >
          <Col xs={6} md={6}>
            <img src={back} width='655px' height="610px"/>
          </Col>
          <Col xs={6} md={6}>
            <Register/>
          </Col>
        </Row>
        <Footer/>
      </div>
    );
  }
}

export default LoginContainer;
