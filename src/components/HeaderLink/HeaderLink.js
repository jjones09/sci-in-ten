import React, { Component } from 'react';
import './HeaderLink.css';

class HeaderLink extends Component {

  getClass = () => {
      let classStr = 'HeaderLink';
      if (this.props.selected) {
        classStr += ' selected';
      }
      return classStr;
  }

  render() {
    return (
      <span className={this.getClass()} onClick={this.props.onClick}>
        {this.props.sectionHeader}
      </span>
    );
  }
}

export default HeaderLink;
