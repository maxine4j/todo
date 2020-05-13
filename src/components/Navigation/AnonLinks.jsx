import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';

const AnonLinks = () => (
    <>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
    </>
);

export default AnonLinks;
