import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./index.styles";
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle/>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
