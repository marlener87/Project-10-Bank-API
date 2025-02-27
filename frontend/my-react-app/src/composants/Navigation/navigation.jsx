//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/argentBankLogo.png';
import './navigation.scss';

import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="mainNav">
            <Link to={'/'} className="logoNav">
                <img
                    className="imageNav"
                    src={logo}
                    alt="Argent Bank Logo"
                />
            </Link>
            
            <div>
                <Link to={'/login'} className='itemNav'>
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" className="icon" />
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;