import React from 'react';
import classNames from 'classnames'

import './styles.css';




function Link({ active, primary }) {
    const classes=classNames({
        'menu__link': true,
        'menu__link--active':active,
        'menu__link--primary':primary
    })



    return (
        <a href='/' className={classes} >Name</a>
    )
}
export default Link;
