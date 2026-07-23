import React from 'react';
import './Features.css';

export default function Features() {
  const specs = [
    {
      title: "Tecnología Antiadherente",
      desc: "Desmolde perfecto sin grasas adicionales. Optimiza el aspecto final de tus productos horneados.",
      icon: "✨"
    },
    {
      title: "Resistente a la Humedad",
      desc: "Mantiene su integridad estructural incluso con masas húmedas y productos congelados.",
      icon: "💧"
    },
    {
      title: "Alta Temperatura",
      desc: "Diseñado para hornos industriales. Soporta temperaturas extremas de hasta 220°C de forma continua.",
      icon: "🔥"
    },
    {
      title: "Serie Star: Reutilizable",
      desc: "La versión Star permite entre 5 y 20 usos consecutivos dependiendo de la carga de azúcar, reduciendo drásticamente costos.",
      icon: "♻️"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <h2>Rendimiento Superior.</h2>
          <p>
            No es solo papel. Es una herramienta de precisión diseñada por PDL 
            para garantizar que tu línea de producción no se detenga.
          </p>
        </div>

        <div className="features-grid">
          {specs.map((spec, i) => (
            <div key={i} className="feature-card glass-panel">
              <div className="feature-icon">{spec.icon}</div>
              <h3>{spec.title}</h3>
              <p>{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
