import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { Auth0Provider } from "@auth0/auth0-react"
import { MantineProvider } from '@mantine/core'; // Import MantineProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-j5niy8d6l7n0dwm3.us.auth0.com"
      clientId="2SnyNEoZw3aVsyzcp2mccWZIzyvMBuj2"
      authorizationParams={{
        redirect_uri: "https://gapribay.com"
      }}
      audience="https://gapribay.com"
      scope="openid profile email"
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
)
