import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './redux';
import Loader from './components/Loader';
import history from './utils/history';
import './utils/i18next';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);