import React, { useState, useEffect, useRef } from 'react';
import './AiAssistant.css';

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Bienvenido. Soy el asesor industrial B2B de Primabake France. ¿Para qué proceso productivo necesita papel de horneado?' }
  ]);
  const [input, setInput] = useState('');
  
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

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: 'Comprendido. Para ese nivel térmico le recomendamos la Serie Star (hasta 220°C constantes). ¿Desea que un ejecutivo le envíe las especificaciones técnicas completas y muestras?' 
      }]);
    }, 1200);
  };

  return (
    <section id="assistant" className="assistant-section" ref={sectionRef}>
      <div className="container assistant-container">
        
        <div className="assistant-content slide-up">
          <div className="section-subtitle">Soporte Continuo</div>
          <h2>Asesoría B2B Integrada.</h2>
          <p>
            Entendemos que la industria no se detiene. Nuestro sistema de 
            perfilado técnico analiza sus requerimientos térmicos y de carga de azúcar
            en tiempo real para asignarle el papel exacto que su planta necesita.
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h4>100%</h4>
              <span>Precisión Técnica</span>
            </div>
          </div>
        </div>
        
        <div className="assistant-ui-wrapper fade-in">
          <div className="assistant-ui">
            <div className="ui-header">
              <div className="ui-title">Primabake Technical Advisor</div>
              <div className="ui-status">
                <span className="pulse"></span> Online
              </div>
            </div>
            
            <div className="ui-chat-area">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.role}`}>
                  {msg.role === 'assistant' && (
                    <div className="avatar">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    </div>
                  )}
                  <div className="bubble">{msg.text}</div>
                </div>
              ))}
            </div>
            
            <form className="ui-input-area" onSubmit={handleSend}>
              <input 
                type="text" 
                placeholder="Describa su línea de producción..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
