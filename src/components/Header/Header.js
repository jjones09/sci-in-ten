import React, { Component } from 'react';
import './Header.css';

import sections from './sections';
import HeaderLink from '../HeaderLink/HeaderLink';

class Header extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedIndex: 0
    };
  }

  setSelectedSection = (index) => {
    this.setState({selectedIndex: index});
  }

  getHeaderSections = () => {
    let sectionHtml = sections.map((element, index) => {
      return <HeaderLink
        key={index}
        sectionHeader={element.sectionHeader}
        selected={index === this.state.selectedIndex}
        onClick={() => this.setSelectedSection(index)}
      />;
    });
    return <div>{sectionHtml}</div>;
  }

  render() {
    return (
      <div className="Header">
        {this.getHeaderSections()}
      </div>
    );
  }
}

export default Header;
