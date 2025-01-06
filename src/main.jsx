import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
createRoot(document.getElementById('root')).render(
    <App />
  
)
