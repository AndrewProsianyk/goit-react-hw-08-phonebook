import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import operations from '../redux/auth/auth-operations'

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername)

    return (
        <div>
            <img src="" alt="" />
            <span>Hello, {name}</span>
            <button
                type="button"
                onClick={()=>dispatch(operations.logOut())}
            >Logout</button>
        </div>
    )
}
