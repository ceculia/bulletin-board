import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Note from './Note';

ReactDOM.render(<Note/>, document.getElementById('root'));
registerServiceWorker();
