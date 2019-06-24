import React from 'react';

import HeaderLink from '../../components/HeaderLink/HeaderLink';
import Logo from '../../components/Logo/Logo';

import './Home.scss';

const pages = [
  { title: 'About', route: '/about', style: 'home' },
  { title: 'Episodes', route: '/episodes', style: 'home' },
  { title: 'Contact', route: '/contact', style: 'home'}];

const getNavLinks = () => pages.map((page, index) => <HeaderLink key={`header-link-${index}`} {...page} />);

const Home = props => {

    return (
        <div className="Home">
          <Logo />
          <div className='NavLinks'>
            {getNavLinks()}
          </div>
        </div>
      )
};

export default Home;