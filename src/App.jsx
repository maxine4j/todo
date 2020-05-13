import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import './theme.scss';
import * as ROUTES from './routes';
import NavigationBar from './components/Navigation';

const App = () => (
    <div className="App">
        <BrowserRouter>
            <NavigationBar />
            <Route path={ROUTES.LANDING} component={null} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </BrowserRouter>
    </div>
);

export default App;
