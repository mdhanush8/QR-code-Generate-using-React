import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QrCode } from './Componetnts/QrCode.jsx'
import "./QrCode.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <QrCode/>
  </StrictMode>,
)
