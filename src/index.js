import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import items from './data/items';

ReactDOM.render(<App items={items} />, document.getElementById('root'));
