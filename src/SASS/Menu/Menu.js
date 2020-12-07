import React from 'react';

import Link from '../Link/Link';
import './styles.scss';



function Menu() {
    return (
        <nav>
            <ul>
                <li><Link /></li>
                <li><Link /></li>
                <li><Link active/></li>
            </ul>
        </nav>
    );
}

export default Menu;