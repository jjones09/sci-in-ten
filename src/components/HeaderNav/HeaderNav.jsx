import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom'

import 'antd/dist/antd.css';
import './HeaderNav.css';

const HeaderNav = props => {

    return (
        <div className='HeaderNav'>
          <div className='NavBtnList'>
            <NavLink exact to='/'><Button className='NavBtn'>
                Home
            </Button></NavLink>
            <NavLink exact to='/about'><Button className='NavBtn'>
                About
            </Button></NavLink>
            <NavLink exact to='/episodes'><Button className='NavBtn'>
                Episodes
            </Button></NavLink>
            <NavLink exact to='contact'><Button className='NavBtn'>
                Contact
            </Button></NavLink>
          </div>
        </div>
      )
};

export default HeaderNav;