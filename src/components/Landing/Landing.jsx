import React from 'react';
import { useSelector } from 'react-redux';
import AuthedLanding from './AuthedLanding';
import AnonLanding from './AnonLanding';

const Landing = () => {
    const { uid } = useSelector((state) => state.firebase.auth);
    return uid ? <AuthedLanding /> : <AnonLanding />;
};

export default Landing;
