import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Home from './components/home.jsx';
import About from './components/about.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App/>
  </StrictMode>,
)
