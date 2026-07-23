import React from 'react';
import './Hero.css';
import logo from '../assets/logo.avif';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      <nav className="hero-nav animate-fade-in-up opacity-0">
        <div className="container nav-container">
          <div className="logo">
            <img src={logo} alt="Primabake Logo" className="logo-img" />
          </div>
          <div className="nav-links">
            <a href="#features">Tecnología de Papel</a>
            <a href="#assistant">Asesoría Industrial</a>
            <a href="#contact" className="btn-nav">Solicitar Muestras</a>
          </div>
        </div>
      </nav>

      <div className="container hero-content">
        <div className="hero-text-col">
          <div className="badge animate-fade-in-up opacity-0 delay-100">
            <span className="badge-dot"></span>
            FRANCE • B2B INDUSTRIAL BAKING SOLUTIONS
          </div>
          
          <h1 className="animate-fade-in-up opacity-0 delay-200">
            MÁXIMO <br/>
            <span className="text-accent">RENDIMIENTO</span> <br/>
            ANTIADHERENTE.
          </h1>
          
          <p className="animate-fade-in-up opacity-0 delay-300">
            Papel de precisión para líneas de panadería industrial. 
            Resistencia comprobada a 220°C y tecnología reutilizable 
            Serie Star para optimizar los costos de tu unidad económica.
          </p>
          
          <div className="hero-actions animate-fade-in-up opacity-0 delay-300">
            <a href="#features" className="btn btn-primary">Ver Specs Técnicos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
