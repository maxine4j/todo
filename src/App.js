import React from 'react';
import SignUpPage from './components/SignUp';
import './theme.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import * as ROUTES from './routes';
import NavigationBar from './components/Navigation';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar />
                <Route path={ROUTES.LANDING} component={null} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={null} />
            </BrowserRouter>
        </div>
    );
}

export default App;
