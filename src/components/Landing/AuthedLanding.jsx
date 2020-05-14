import React from 'react';
import { useSelector } from 'react-redux';

const AuthedLanding = () => {
    const profile = useSelector((state) => state.firebase.profile);
    console.log(profile);


    return (
        <div className="card landing">
            <div className="card-top">
                <h1>&#47;&#47; TODO:</h1>
            </div>
            <div className="card-bottom">
                <p>Welcome to &#47;&#47; TODO:</p>
            </div>
        </div>
    );
};

export default AuthedLanding;
