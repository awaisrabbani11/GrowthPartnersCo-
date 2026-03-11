import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MedicalBilling from './pages/MedicalBilling';
import SpecialtyDetail from './pages/SpecialtyDetail';
import TruckDispatching from './pages/TruckDispatching';
import AIAutomations from './pages/AIAutomations';
import RealEstate from './pages/RealEstate';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/medical-billing" element={<MedicalBilling />} />
          <Route path="services/medical-billing/specialty/:id" element={<SpecialtyDetail />} />
          <Route path="services/truck-dispatching" element={<TruckDispatching />} />
          <Route path="services/ai-automations" element={<AIAutomations />} />
          <Route path="services/real-estate" element={<RealEstate />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
