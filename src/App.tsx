import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default App;
