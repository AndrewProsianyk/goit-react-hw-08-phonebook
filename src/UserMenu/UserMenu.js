import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import operations from '../redux/auth/auth-operations'
import styles from './UserMenu.module.css';
import userImg from './userImg.png'

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername)

    return (
        <div className={styles.container}>
            <img src={userImg} alt="" className={styles.userImg}/>
            <span className={styles.userSpan}>Hello, {name}</span>
            <button
                className={styles.logoutBtn}
                type="button"
                onClick={()=>dispatch(operations.logOut())}
            >Logout</button>
        </div>
    )
}
