import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './Reducers'
import App from './Component/App';
import {Router} from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import History from './History'
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const store=createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(<Provider store={store}><Router history={History}><App /></Router></Provider>, document.getElementById('root'));

