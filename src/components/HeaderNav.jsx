import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom'

import 'antd/dist/antd.css';
import './HeaderNav.css';

import stateManipulator from '../stateManipulator';

const HeaderNav = props => {

    return (
        <div className='HeaderNav'>
          <div className='NavBtnList'>
            <Button className='NavBtn'>
                Home
            </Button>
            <Button className='NavBtn'>
                About
            </Button>
            <Button className='NavBtn'>
                Episodes
            </Button>
            <Button className='NavBtn'>
                Contact
            </Button>
          </div>
        </div>
      )
};

export default HeaderNav;