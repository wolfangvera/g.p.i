import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const CLIENT_ID="WhNRRsNYB5KrwRNa6SMVmrktFzVPldXz";
const DOMAIN="dev-5fn6nk1y.us.auth0.com";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
    domain={DOMAIN}
    clientId={CLIENT_ID}
     redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
