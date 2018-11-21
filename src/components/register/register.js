import React, { Component } from 'react';
import { Col, Row, Button, Well } from "react-bootstrap";

class RegisterComponent extends Component {
  render() {
    return (
        <div className="well-div">
                <span className="register-header">Get free account</span>
                <div className="stnd-mrgn"/>
                <Row>
                  <Col className="mrgn-top" md={6}>
                    <input
                      type='text'
                      placeholder='First name'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col className="mrgn-top" md={6}>
                    <input
                      type='text'
                      placeholder='Last name'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col className="mrgn-top" md={6}>
                    <input
                      type='text'
                      placeholder='Email or phone number'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col className="mrgn-top" md={6}>
                    <input
                      type='text'
                      placeholder='Password'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col xs={6} xsOffset={6} className="password-help">
                    <span className="help-text">At least 7 characters</span>
                  </Col>
                  <Col md={12}>
                    <div className="margin"/>
                  </Col>
                  <Col className="padding-lf-rt" md={12}>
                    <Button bsSize="large" bsClass="signup-btn">
                      Create Account
                    </Button>
                  </Col>
                  <Col className="padding-top" md={12}>
                    <span className="info-text">By clicking Create Account, you agree to our<span className="info-text-color"> Terms, Data Poilcy</span> and <span className="info-text-color">Cookie Policy</span>.</span>
                  </Col>
                  <Col className="mrgn-top-text" md={12}>
                    <span className="business-info-text">Create business pages and groups after signing up</span>
                  </Col>
                </Row>
              </div> 
    );
  }
}

export default RegisterComponent;
