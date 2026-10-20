import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavigate = (pageId) => {
    if (pageId === 'about' || pageId === 'works' || pageId === 'contact') {
      if (activePage !== 'home') {
        setActivePage('home');
        setTimeout(() => {
          document.getElementById(pageId)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        document.getElementById(pageId)?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060609] text-white flex flex-col font-sans selection:bg-pink-500/30 selection:text-white">
      {/* Fixed Frosted Navbar */}
      <Navbar activePage={activePage} setActivePage={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectProject={setSelectedProject} 
          />
        )}
        {activePage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Clean Minimal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
