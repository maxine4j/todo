import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';

const NotFound = () => (
    <div className="card">
        <div className="card-top">
            <h1>404 Not Found</h1>
        </div>
        <div className="card-bottom">
            <p>
                This page does not exist.
                {' '}
                <Link className="home-link" to={ROUTES.LANDING}>Return Home</Link>
                .
            </p>

        </div>
    </div>
);

export default NotFound;
