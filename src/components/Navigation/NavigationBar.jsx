import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';
import './NavigationBar.scss';
import { useSelector } from 'react-redux';
import AnonLinks from './AnonLinks';
import AuthedLinks from './AuthedLinks';

const NavigationBar = () => {
    const auth = useSelector(state => state.firebase.auth);
    
    const links = auth.uid ? <AuthedLinks /> : <AnonLinks />;

    return (
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>Home</Link>
                </li>
                {links}
            </ul>
        </nav>
    );
}

export default NavigationBar;