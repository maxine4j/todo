import React from 'react';
import SignUpPage from './components/SignUp';
import { FirebaseContext } from './components/Firebase';
import './theme.scss';

function App() {
    return (
        <div className="App">
            <FirebaseContext.Consumer>
                {firebase => <SignUpPage firebase={firebase} />}
            </FirebaseContext.Consumer>
        </div>
    );
}

export default App;
