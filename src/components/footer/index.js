import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="footer-container">
          <ul>
            <li>Help Center</li>
            <li>Advertising</li>
            <li>About</li>
            <li>Press</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Cookies</li>
            <li>Term of Service</li>
            <li>Investors</li>
            <li>Crowdfunding</li>
          </ul>
          <span className="footer-holemark">USA.Life, 2018. All rights reserved.</span>
        </div>
    );
  }
}

export default Footer;
