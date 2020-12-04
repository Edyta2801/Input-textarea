import React from 'react';

import Link from '../Link/Link';

import './styles.css';




function Menu() {
    return (
        <div className='menu'>
            <Link />
            <Link active/>
            <Link />
        </div>
    );
}

export default Menu;