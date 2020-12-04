import React from 'react';

import './styles.css';




function Link({ active }) {

    const activeClass = active ? 'menu__link--active' : '';

    return (
        <a href='/' className={`menu__link ${activeClass}`} >Name</a>
    )
}
export default Link;
