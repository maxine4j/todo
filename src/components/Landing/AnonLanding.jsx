import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes';

const AnonLanding = () => (
    <div className="card landing">
        <div className="card-top">
            <h1>&#47;&#47; TODO:</h1>
        </div>
        <div className="card-bottom">
            <p>Welcome to &#47;&#47; TODO:</p>
            <p>
                Please
                {' '}
                <Link to={ROUTES.SIGN_IN}>Log In</Link>
                {' '}
                or
                {' '}
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                {' '}
                to start making your list.
            </p>
        </div>
    </div>
);

export default AnonLanding;
