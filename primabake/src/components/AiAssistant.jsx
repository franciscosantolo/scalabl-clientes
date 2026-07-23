import React, { useState, useEffect, useRef } from 'react';
import './AiAssistant.css';

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Bienvenido. Soy el perfilador técnico de Primabake. Para derivarlo correctamente, ¿busca comprar directo para su fábrica en Francia o distribuir internacionalmente?' }
  ]);
  const [input, setInput] = useState('');
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: 'Registrado. Para una línea de alta temperatura (220°C) o alta carga de azúcar, sugerimos la Serie Star. ¿Me indica su correo corporativo para enviarle la tabla de retornos (ROI)?' 
      }]);
    }, 1200);
  };

  return (
    <section id="assistant" className="assistant-section" ref={sectionRef}>
      <div className="container assistant-container">
        
        <div className="assistant-content slide-up">
          <div className="badge">AI-Powered Sales</div>
          <h2>Atención Técnica Global.</h2>
          <p>
            No pierdas leads fuera de horario. Nuestro agente automatizado 
            perfila técnicamente a cada prospecto B2B, resuelve consultas 
            sobre la Serie Star y lo deriva al ejecutivo de cuentas correspondiente.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h4>24/7</h4>
              <span>Disponibilidad</span>
            </div>
            <div className="stat-card">
              <h4>100%</h4>
              <span>Cualificación técnica</span>
            </div>
          </div>
        </div>
        
        <div className="assistant-ui-wrapper fade-in">
          <div className="assistant-ui">
            <div className="ui-header">
              <div className="window-controls">
                <span></span><span></span><span></span>
              </div>
              <div className="ui-title">Primabake Technical Agent</div>
              <div className="ui-status">
                <span className="pulse"></span> Online
              </div>
            </div>
            
            <div className="ui-chat-area">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.role}`}>
                  {msg.role === 'assistant' && (
                    <div className="avatar">P</div>
                  )}
                  <div className="bubble">{msg.text}</div>
                </div>
              ))}
            </div>
            
            <form className="ui-input-area" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Ingrese respuesta..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
          
          <div className="ui-glow"></div>
        </div>

      </div>
    </section>
  );
}
