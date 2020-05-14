import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { useSelector } from 'react-redux';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import Landing from './components/Landing';
import './theme.scss';
import * as ROUTES from './routes';
import NavigationBar from './components/Navigation';
import NotFound from './components/NotFound';

const requireLogin = (auth) => (to, from, next) => {
    if (to.meta.auth) {
        if (auth.uid) {
            next();
        } else {
            next.redirect(ROUTES.SIGN_IN);
        }
    } else {
        next();
    }
};

const requireAnon = (auth) => (to, from, next) => {
    if (to.meta.anon) {
        if (!auth.uid) {
            next();
        } else {
            next.redirect(ROUTES.LANDING);
        }
    } else {
        next();
    }
};

const App = () => {
    const auth = useSelector((state) => state.firebase.auth);

    return (
        <div className="App">
            <BrowserRouter>
                <GuardProvider guards={[requireLogin(auth), requireAnon(auth)]} loading={null} error={NotFound}>
                    <NavigationBar />
                    <Switch>
                        <GuardedRoute exact path={ROUTES.LANDING} component={Landing} />
                        <GuardedRoute exact path={ROUTES.SIGN_UP} component={SignUpPage} meta={{ anon: true }} />
                        <GuardedRoute exact path={ROUTES.SIGN_IN} component={SignInPage} meta={{ anon: true }} />
                        <GuardedRoute path="*" component={NotFound} />
                    </Switch>
                </GuardProvider>
            </BrowserRouter>
        </div>
    );
};
export default App;
