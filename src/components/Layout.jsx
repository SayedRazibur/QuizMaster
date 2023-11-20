import React from 'react';
import classes from '../styles/Laout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main className={classes.main}>
                <div className={classes.container}>{children}</div>
            </main>
        </>
    );
};

export default Layout;
