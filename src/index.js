import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

import climateChange from './data/climateChange.json';

ReactDOM.render(
    <BrowserRouter>
        <App triviaData={climateChange}/>
    </BrowserRouter>, document.getElementById('root'));