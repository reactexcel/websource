import React, { Component } from "react";
import { Grid, Col, Row, Button, Well } from "react-bootstrap";
import './login.css'
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';

class LoginContainer extends Component {
  render() {
    return (
      <div className="login-view">
        <Row className="login-row">
          <Col className="header" md={12}>
            <Grid>
              <Row>
                <Col xs={6} md={6}>
                  <img src={logo} width='165px' height="69px"/>
                </Col>
                <Col className="header-sub" xs={6} md={6}>
                  <div>
                    <span className="header-text">Already have an account?</span>
                    <Button bsClass="header-btn">
                      Log In
                    </Button>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
        <Row >
          <Col xs={6} md={6}>
            <img src={back} width='655px' height="600px"/>
          </Col>
          <Col xs={6} md={6}>
            <Well className="login-well">
              <div className="well-div">
                <span className="register-header">Create an account</span>
                <span className="register-subheader" > It's free and always will be</span>
                <div className="stnd-mrgn"/>
                <Row>
                  <Col md={6}>
                    <input
                      type='text'
                      placeholder='First name'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      type='text'
                      placeholder='Last name'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col className="mrgn-top" md={12}>
                    <input
                      type='text'
                      placeholder='Email or phone number'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col className="mrgn-top" md={12}>
                    <input
                      type='text'
                      placeholder='Password'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col className="extra-mrgn"  md={12}>
                   <span>Birthday</span>
                  </Col>
                  <Col className="mrgn-top" md={4}>
                    <input
                      type='text'
                      placeholder='6'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col className="mrgn-top" md={4}>
                    <input
                      type='text'
                      placeholder='Nov'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                  <Col className="mrgn-top" md={4}>
                    <input
                      type='text'
                      placeholder='1993'
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </Col>
                   <Col className="radio-div" md={6}>
                    <input
                      className="radio-btn"
                      type='radio'
                      checked={true}
                      value="Male"
                      // placeholder='1993'
                      onChange={(e) => this.setState({email: e.target.value})}
                    /><span className="radio-text">Male</span>
                  </Col>
                  <Col className="radio-div" md={6}>
                    <input
                      className="radio-btn"
                      type='radio'
                      value="Female"
                      // placeholder='1993'
                      onChange={(e) => this.setState({email: e.target.value})}
                    /><span className="radio-text">Female</span>
                  </Col>
                  <Col md={12}>
                    <div className="margin"/>
                  </Col>
                  <Col md={12}>
                    <Button bsSize="large" bsClass="signup-btn">
                      Sign Up
                    </Button>
                  </Col>
                  <Col className="mrgn-top" md={12}>
                    <span><span>Create a Page</span> for a celebrity, band or bussines</span>
                  </Col>
                </Row>
              </div>
            </Well>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginContainer;
