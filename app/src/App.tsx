import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import Templates from './pages/Templates';
import Services from './pages/Services';
import WhatsApp from './pages/WhatsApp';
import Chatbots from './pages/Chatbots';
import Courses from './pages/Courses';
import Pricing from './pages/Pricing';
import Workflows from './pages/Workflows';
import About from './pages/About';
import Contact from './pages/Contact';
import DataEntry from './pages/DataEntry';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#070A12] text-[#F4F6FF]">
        {/* Noise overlay */}
        <div className="noise-overlay" />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/services" element={<Services />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
            <Route path="/chatbots" element={<Chatbots />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/data-entry" element={<DataEntry />} />
          </Routes>
        </main>
        
        {/* Footer - only show on non-data-entry pages */}
        <Routes>
          <Route path="/data-entry" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
        
        {/* Floating WhatsApp button - only show on non-data-entry pages */}
        <Routes>
          <Route path="/data-entry" element={null} />
          <Route path="*" element={<WhatsAppButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
