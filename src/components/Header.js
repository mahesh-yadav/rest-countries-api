import React from 'react';
import styles from './header.module.css';

function Header(){
    return(
        <header className={styles.Header}>
            <h1>Where in the world?</h1>
            <label className="toggler" htmlFor="theme-toggler">
                <i className="far fa-moon"></i>
                <span>Dark Mode</span>
            </label>
        </header>
    );
}

export default Header;