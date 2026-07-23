import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AiAssistant from './components/AiAssistant';
import LeadCapture from './components/LeadCapture';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Features />
      <AiAssistant />
      <LeadCapture />
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--color-text-muted)', backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
        <p>&copy; 2026 Primabake PDL France. Innovation in Baking Paper.</p>
      </footer>
    </div>
  );
}

export default App;
