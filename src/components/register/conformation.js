import React, { Component } from 'react';
import { Col, Row, Button, Well } from "react-bootstrap";
import './register.css';

class Conformation extends Component {
  render() {
    return (
        <div className="well-div">
            <span className="confrm-header">Verify your email address</span>
            <span className="confrm-sub-text">Enter the verfication code we emailed you at</span>
            <span className="confrm-sub-text">useremail@address.com. if you don't see it, check your spam filter</span>
                <Row>
                    <Col md={12}>
                        <div className="mrgn-tp"/>
                    </Col>
                    <Col className="cnfrm-lf-rt" md={12}>
                        <input
                            type='text'
                            placeholder='Enter Code'
                            onChange={(e) => this.setState({email: e.target.value})}
                        />
                    </Col>
                    <Col md={12}>
                        <div className="mrgn-tp"/>
                    </Col>
                    <Col className="cnfrm-lf-rt" md={12}>
                        <Button bsSize="large" bsClass="signup-btn">
                            Verify
                        </Button>
                  </Col>
                </Row>
        </div>
    );
  }
}

export default Conformation;
