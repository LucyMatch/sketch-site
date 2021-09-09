import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

import App from './App';
import AppRouter from './router';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<AppRouter />, document.getElementById('footer'));
