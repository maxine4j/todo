import React from 'react';
import TodoList from '../TodoList';

const AuthedLanding = () => (
    <div className="card landing">
        <div className="card-top">
            <h1>&#47;&#47; TODO:</h1>
        </div>
        <div className="card-bottom">
            <TodoList />
        </div>
    </div>
);

export default AuthedLanding;
