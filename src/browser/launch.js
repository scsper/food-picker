import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import appStates from './reducers/index';

export default function launch() {

    //creates a store from a reducing function that returns the next state
    let store = createStore(appStates);

    render(
        <Provider store = {store}>
            <App />
        </Provider>,
        document.getElementById('container')
    );
}

launch();
