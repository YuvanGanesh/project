import React, { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Phone, MapPin, Zap, Brain, Cpu, Leaf, Code, Factory, ChevronDown, ChevronUp, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Domains from './components/Domains';
import Careers from './components/Careers';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Domains />
          <Careers />
          <Contact />
        </main>
        <ProjectModal />
      </div>
    </ThemeProvider>
  );
}

export default App;