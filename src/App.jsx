import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Layout/Footer.jsx'
import Navbar from './components/Layout/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectTemplate from './pages/ProjectTemplate.jsx'
import { ThemeProvider } from "./context/ThemeContext";
import FunnelTest from './pages/FunnelTest.jsx'
import { useLocation } from 'react-router-dom'

function AppLayout() {
  const location = useLocation()
  const isFunnel = location.pathname === '/funnel-test'

  return (
    <>
      {!isFunnel && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/project/:id" element={<ProjectTemplate />}/>
        <Route path="/funnel-test" element={<FunnelTest />}/>
      </Routes>
      {!isFunnel && <Footer />}
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  )
}

export default App
