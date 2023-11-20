import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-bg.png';
import classes from '../styles/Nav.module.css';
import Account from './Account';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        {/* <h3>Q & A</h3> */}
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
};

export default Nav;
