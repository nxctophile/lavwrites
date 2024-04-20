import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.scss'
import {BrowserRouter} from "react-router-dom";
import {FluentProvider, webDarkTheme} from "@fluentui/react-components";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <FluentProvider theme={webDarkTheme}>
            <App />
        </FluentProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
