import React, { useEffect, useRef } from 'react';
import './Features.css';

export default function Features() {
  const specs = [
    {
      title: "Tecnología Antiadherente",
      desc: "Desmolde perfecto sin grasas adicionales. Optimiza el aspecto final de tus productos horneados.",
      icon: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M13 2v7h7"
    },
    {
      title: "Resistente a la Humedad",
      desc: "Mantiene su integridad estructural incluso con masas húmedas y productos congelados.",
      icon: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
    },
    {
      title: "Alta Temperatura",
      desc: "Diseñado para hornos industriales. Soporta temperaturas extremas de hasta 220°C de forma continua.",
      icon: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
    },
    {
      title: "Serie Star: Reutilizable",
      desc: "La versión Star permite entre 5 y 20 usos consecutivos dependiendo de la carga de azúcar, reduciendo costos.",
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
          <h2>Ingeniería en papel.</h2>
          <p>
            No es un consumible más. Es un componente crítico de tu línea 
            de producción, diseñado por expertos en Francia.
          </p>
        </div>

        <div className="features-grid">
          {specs.map((spec, i) => (
            <div key={i} className="feature-card" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
