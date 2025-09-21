import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './config/global.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/Auth.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import axios from 'axios';

// Backend URL set karo
axios.defaults.baseURL = 'http://localhost:5000';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)