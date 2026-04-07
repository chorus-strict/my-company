import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Backendless from 'backendless';
import './index.css'
import App from './App.jsx'

// Inisialisasi Backendless (Data dari Dashboard European Union Cluster)
const APP_ID = '42C0BA8F-7343-44F2-B179-F5D29FCEBAA2';
const API_KEY = '5D745295-A894-4993-B308-AE459F959A8B';

// Set Server URL ke Cluster EU agar tidak terjadi error koneksi
Backendless.serverURL = "https://eu-api.backendless.com";
Backendless.initApp(APP_ID, API_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)