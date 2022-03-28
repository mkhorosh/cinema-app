import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
// import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';
// import { store } from './store/store';

ReactDOM.render(
    // <Provider store={store}>
    <App />,
    // </Provider>,
    document.getElementById('root')
);
