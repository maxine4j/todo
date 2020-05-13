import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions/auth';

const AuthedLinks = () => {
    const dispatch = useDispatch();

    return (
        <li>
            <a href='/' onClick={() => dispatch(signOut())}>Sign Out</a>
        </li>
    );
}

export default AuthedLinks;