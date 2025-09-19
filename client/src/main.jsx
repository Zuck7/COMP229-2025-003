import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Contact from './components/contact.jsx'
import About from './components/About.jsx'

import Projects from './components/projects.jsx'
import Services from './components/Services.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Home/>
    <About/>
    <Contact/>
    <Projects/>
    <Services/>
  </StrictMode>,
)
