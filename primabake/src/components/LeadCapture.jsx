import React, { useEffect, useRef } from 'react';
import './LeadCapture.css';

export default function LeadCapture() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('in-view');
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="lead-section" ref={sectionRef}>
      <div className="container">
        <div className="lead-wrapper zoom-in">
          <div className="lead-text">
            <h2>Solicite Muestras.</h2>
            <p>
              Pruebe el rendimiento real de la Serie Star en su línea de producción. 
              Complete el formulario corporativo y un especialista se comunicará a la brevedad.
            </p>
          </div>
          
          <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre y Apellido</label>
                <input type="text" placeholder="Ej. Jean Dupont" required />
              </div>
              <div className="form-group">
                <label>Empresa</label>
                <input type="text" placeholder="Boulangerie Paris" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Correo Corporativo</label>
              <input type="email" placeholder="jean@empresa.com" required />
            </div>
            
            <div className="form-group">
              <label>Volumen de Producción (Mensual)</label>
              <select defaultValue="">
                <option value="" disabled>Seleccione volumen</option>
                <option value="1">Menos de 10.000 unidades</option>
                <option value="2">10.000 - 50.000 unidades</option>
                <option value="3">Más de 50.000 unidades (Industrial)</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary w-full">Solicitar Evaluación Técnica</button>
          </form>
        </div>
      </div>
    </section>
  );
}
