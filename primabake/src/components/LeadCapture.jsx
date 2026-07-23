import React from 'react';
import './LeadCapture.css';

export default function LeadCapture() {
  return (
    <section id="contact" className="lead-section">
      <div className="container">
        <div className="lead-box glass-panel">
          <div className="lead-text">
            <h2>Hablemos de tu Producción.</h2>
            <p>
              Deja tus datos y uno de nuestros especialistas técnicos en 
              horneado industrial se pondrá en contacto contigo para enviarte 
              muestras de la línea Star.
            </p>
          </div>
          <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Jean Dupont" required />
            </div>
            <div className="form-group">
              <label>Empresa / Panadería</label>
              <input type="text" placeholder="Boulangerie Paris" required />
            </div>
            <div className="form-group">
              <label>Email Profesional</label>
              <input type="email" placeholder="jean@boulangerie.com" required />
            </div>
            <div className="form-group">
              <label>Tipo de Cliente</label>
              <select>
                <option>Distribuidor Internacional</option>
                <option>Distribuidor en Francia</option>
                <option>Cliente Directo (Panadería/Industria)</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-full">Solicitar Muestras</button>
          </form>
        </div>
      </div>
    </section>
  );
}
