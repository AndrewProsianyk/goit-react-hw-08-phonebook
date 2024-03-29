import React from 'react';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import authSelectors from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import styles from './AppBar.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <header className={styles.header}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};