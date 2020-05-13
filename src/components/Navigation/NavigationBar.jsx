import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';
import './NavigationBar.scss';

const NavigationBar = () => (
    <nav>
        <ul>
            <li>
                <Link to={ROUTES.LANDING}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
        </ul>
    </nav>
);

export default NavigationBar;