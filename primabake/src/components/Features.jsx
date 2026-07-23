import React, { useEffect, useRef } from 'react';
import './Features.css';

export default function Features() {
  const specs = [
    {
      title: "Desmolde Perfecto",
      desc: "Tecnología antiadherente premium para preservar la integridad visual de pastelería fina y panes.",
      icon: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M13 2v7h7"
    },
    {
      title: "Barrera de Humedad",
      desc: "Resiste masas congeladas y procesos de leudado intensivos sin perder firmeza estructural.",
      icon: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
    },
    {
      title: "Resistencia a 220°C",
      desc: "Desarrollado para hornos industriales de alta carga calórica sin carbonización rápida.",
      icon: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
    },
    {
      title: "Línea Star (Reutilizable)",
      desc: "Diseñado para resistir entre 5 y 20 ciclos de horneado, reduciendo drásticamente mermas.",
      icon: "M21 2v6h-6 M3 12a9 9 0 0 1 15-6.7L21 8 M3 22v-6h6 M21 12a9 9 0 0 1-15 6.7L3 16"
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features-section" ref={sectionRef}>
      <div className="container">
        <div className="features-header">
          <div className="section-subtitle">El estándar industrial</div>
          <h2>Ingeniería en Papel.</h2>
          <p>
            No es un consumible más. Es un componente crítico de tu línea 
            de producción.
          </p>
        </div>

        <div className="features-grid">
          {specs.map((spec, i) => (
            <div key={i} className="feature-card" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="feature-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={spec.icon}></path>
                </svg>
              </div>
              <h3>{spec.title}</h3>
              <p>{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
