import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/history'
import thunk from 'redux-thunk';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log('--->', store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
