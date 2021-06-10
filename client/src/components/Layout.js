import React from 'react';
import { FaUser, FaVideo, FaMicrophone, FaPhone, FaEllipsisV } from 'react-icons/fa';

import styles from '../styles/layout.module.css';

function Layout({ children }) {
    return (
        <div className={styles.bgContainer}>
            <header>
                <h1>Call Me</h1>
                <div className={styles.headerIconContainer}><FaUser /></div>
            </header>
            { children }
            <footer>
                <div><FaVideo /></div>
                <div><FaMicrophone /></div>
                <div className={styles.bgRed} ><FaPhone /></div>
                <div><FaEllipsisV /></div>
            </footer>
        </div>
    )
}

export default Layout;
