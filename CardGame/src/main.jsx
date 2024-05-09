import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Global, ThemeProvider } from '@emotion/react';
import { Theme } from './styles/Theme';
import { GlobalStyle } from './styles/GlobalStyle';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyle}/>
        <App />
    </ThemeProvider>
)
