import React from 'react';
import { NavLink } from 'react-router-dom'

import './HeaderLink.css';

const HeaderLink = ({route, title, style}) => {

    return (
        <NavLink className={`HeaderLink ${style}`} exact to={route}>
          <div className={'HeaderLinkText'}>{title}</div>
        </NavLink>
      )
};

export default HeaderLink;