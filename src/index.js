import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';

ReactDOM.render(
  // the provider is the component class from redux that gives the redux store context to the rest of the app
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
