import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import exportedObject from './Redux/store';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // the provider is the component class from redux that gives the redux store context to the rest of the app
  <Provider store={exportedObject.store} >
    <BrowserRouter>
    <PersistGate persistor={exportedObject.persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
