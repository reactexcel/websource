import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import { Button } from "react-bootstrap";
import './header.css';

class Header extends Component {
  render() {
    return (
        <div className='header'>
           <img src={logo} width='165px' height="69px"/>
           <div className='form'>
            <div className='group'>
              <span className="header-subtext">Email or Phone</span>
              <input
                type='text'
                placeholder=''
                onChange={(e) => this.setState({email: e.target.value})}
              />
            </div>
            <div className='group'>
              <span className="header-subtext" >Password</span>
              <input
                type='text'
                placeholder=''
                onChange={(e) => this.setState({email: e.target.value})}
              />
              <span className="forget-help-text">Forgot Password</span>
            </div>
            <Button bsClass="header-btn ">
              Log In
            </Button>
           </div>
        </div>
    );
  }
}

export default Header;
