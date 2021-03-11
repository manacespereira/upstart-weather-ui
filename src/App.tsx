import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Link } from 'react-router-dom';

import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/repositories">Repositories Page</Link>
            </li>
          </ul>
          <Routes />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
