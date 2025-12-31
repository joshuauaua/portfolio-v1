import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Layout/Footer.jsx'
import Navbar from './components/Layout/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectTemplate from './pages/ProjectTemplate.jsx'
import { ThemeProvider } from "./context/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <HashRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/project/:id" element={<ProjectTemplate />}/>
      </Routes>
      <Footer />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
