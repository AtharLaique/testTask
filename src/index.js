import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(<Router>
    <App />
    </Router>, document.getElementById('root'));
serviceWorker.unregister();
