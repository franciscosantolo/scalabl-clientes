import React from 'react';
import './Hero.css';
import logo from '../assets/logo.avif';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-content">
        <header className="hero-header">
          <div className="logo">
            <img src={logo} alt="Primabake Logo" style={{ height: '40px', width: 'auto' }} />
          </div>
          <nav className="hero-nav">
            <a href="#features">Productos</a>
            <a href="#assistant">Agente B2B</a>
            <a href="#contact" className="btn btn-primary btn-sm">Contactar Ventas</a>
          </nav>
        </header>

        <div className="hero-main">
          <div className="hero-text-box glass-panel">
            <div className="badge">
              <span className="badge-dot"></span>
              PDL France • +100 Años de Excelencia
            </div>
            <h1>El Papel de Horneado Perfecto para la Industria.</h1>
            <p>
              Revoluciona tu producción con nuestra tecnología antiadherente avanzada. 
              Desarrollado en Francia para resistir las condiciones más extremas y 
              optimizar los costos operativos de panaderías y distribuidores globales.
            </p>
            <div className="hero-actions">
              <a href="#features" className="btn btn-primary">Descubrir Tecnología</a>
              <a href="#assistant" className="btn btn-secondary">Hablar con Asistente</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
