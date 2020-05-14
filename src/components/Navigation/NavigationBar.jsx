import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as ROUTES from '../../routes';
import './NavigationBar.scss';
import AnonLinks from './AnonLinks';
import AuthedLinks from './AuthedLinks';

const NavigationBar = () => {
    const { uid } = useSelector((state) => state.firebase.auth);
    const links = uid ? <AuthedLinks /> : <AnonLinks />;

    return (
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.LANDING}>&#47;&#47; TODO:</Link>
                </li>
                {links}
            </ul>
        </nav>
    );
};

export default NavigationBar;
