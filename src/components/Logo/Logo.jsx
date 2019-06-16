import React from 'react';

import './Logo.css';

const Logo = props => {

    return (
        <div className='Logo'>
            <h2>SCIENCE IN TEN</h2>
            <img
                src={require('../../assets/logo-flask.png')}
                alt='Science-In-Ten-Logo'
                width='40%' />
        </div>
      )
};

export default Logo;