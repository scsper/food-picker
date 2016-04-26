import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app.jsx';

export default function() {
    ReactDOM.render(
        <App />,
        document.getElementById('container')
    );
}
