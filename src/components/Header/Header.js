import React, { Component } from 'react';
import './Header.css';

import sections from './sections';
import HeaderLink from '../HeaderLink/HeaderLink';

const getHeaderSections = () => {
  let sectionHtml = sections.map(element => {
    return <HeaderLink sectionHeader={element.sectionHeader}/>
  });
  return <div>{sectionHtml}</div>;
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {getHeaderSections()}
      </div>
    );
  }
}

export default Header;
