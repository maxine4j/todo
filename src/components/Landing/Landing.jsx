import React from 'react';
import { useSelector } from 'react-redux';
import AuthedLanding from './AuthedLanding';
import AnonLanding from './AnonLanding';

const Landing = () => {
    const auth = useSelector((state) => state.firebase.auth);

    if (auth.uid) {
        return <AuthedLanding />;
    }

    return <AnonLanding />;
};

export default Landing;
