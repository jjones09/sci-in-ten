import React, { Component } from 'react';
import './HeaderLink.css';

class HeaderLink extends Component {
  render() {
    return (
      <span className="HeaderLink">
        {this.props.sectionHeader}
      </span>
    );
  }
}

export default HeaderLink;
