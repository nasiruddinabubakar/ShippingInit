import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { QueryProvider } from './libs/react-query/QueryProvider';
import { Browser } from 'leaflet';
import { BrowserRouter } from 'react-router-dom';
import { SocketProvider } from './context/SocketProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <QueryProvider>
        <Provider store={store}>
        {/* <SocketProvider> */}
          <App />
          
  {/* </SocketProvider> */}
        </Provider>
      </QueryProvider>
    </BrowserRouter>
);
