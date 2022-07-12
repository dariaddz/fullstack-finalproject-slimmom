import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import './fonts/fonts.css';
import store from './redux/store';
import { persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
            <Toaster
              position="top-right"
              toastOptions={{ duration: 3000 }}
            />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
