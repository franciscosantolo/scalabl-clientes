import React from 'react';
import './Hero.css';
import logo from '../assets/logo.avif';


export default function Hero() {
  return (
    <section className="hero-section">
      <nav className="hero-nav animate-fade-in-up opacity-0">
        <div className="container nav-container">
          <div className="logo">
            <img src={logo} alt="Primabake Logo" />
          </div>
          <div className="nav-links">
            <a href="#features">Tecnología</a>
            <a href="#assistant">Agente B2B</a>
            <a href="#contact" className="btn-nav">Contactar</a>
          </div>
        </div>
      </nav>

      <div className="container hero-content">
        <div className="hero-text-grid">
          <div className="hero-text-col">
            <div className="badge animate-fade-in-up opacity-0 delay-100">
              <span className="badge-dot"></span>
              PDL France • +100 Años de Legado Industrial
            </div>
            
            <h1 className="animate-fade-in-up opacity-0 delay-200">
              El papel de horneado <br/>
              <span className="text-gradient">para la industria exigente.</span>
            </h1>
            
            <p className="animate-fade-in-up opacity-0 delay-300">
              Desarrollado en Francia para resistir 220°C y ser reutilizado hasta 20 veces. 
              Máximo rendimiento antiadherente para optimizar tu unidad económica.
            </p>
            
            <div className="hero-actions animate-fade-in-up opacity-0 delay-400">
              <a href="#features" className="btn btn-primary">
                Ver Rendimiento
                {/* Arrow SVG fallback since lucide failed to install */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '0.5rem'}}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#assistant" className="btn-link">Hablar con Asistente Técnico</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator animate-fade-in-up opacity-0 delay-500">
        <span>Descubrir specs</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
