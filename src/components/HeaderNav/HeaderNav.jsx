import React from 'react';

import HeaderLink from '../HeaderLink/HeaderLink';

import './HeaderNav.css';

const pages = [
  { title: 'Home', route: '/', style: 'header' },
  { title: 'About', route: '/about', style: 'header' },
  { title: 'Episodes', route: '/episodes', style: 'header' },
  { title: 'Contact', route: '/contact', style: 'header' }
];

const getHeaderLinks = () => pages.map((page, index) => <HeaderLink key={`header-link-${index}`} {...page} />);

const HeaderNav = props => {
    return (
        <div className='HeaderNav'>
          <div className='NavBtnList'>
            {getHeaderLinks()}
          </div>
        </div>
      )
};

export default HeaderNav;