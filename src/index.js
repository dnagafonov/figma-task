import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import WorkersList from "./components/center-pannel/schedule-item-list/schedule-item-list";

ReactDOM.render(<WorkersList />, document.getElementById('root'));

serviceWorker.unregister();
