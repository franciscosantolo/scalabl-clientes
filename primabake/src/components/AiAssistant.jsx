import React, { useState } from 'react';
import './AiAssistant.css';

export default function AiAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: '¡Hola! Soy tu asistente técnico de Primabake. ¿Buscas distribuir nuestros productos internacionalmente o comprar directo para tu operación en Francia?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: '¡Entendido! Nuestra línea Star es ideal para maximizar el ROI. ¿Para qué tipo de producción (nivel de azúcar) necesitas el papel? Esto me ayudará a calcular cuántas veces podrás reutilizarlo.' 
      }]);
    }, 1000);
  };

  return (
    <section id="assistant" className="assistant-section">
      <div className="container assistant-container">
        <div className="assistant-content">
          <h2>Agente B2B Integrado</h2>
          <p>
            Un diferencial clave para distribuidores y clientes directos. 
            Califica leads en tiempo real, resuelve dudas técnicas sobre temperatura 
            o niveles de azúcar, y captura los datos de contacto antes de pasar el 
            prospecto a un ejecutivo humano.
          </p>
          <ul className="assistant-benefits">
            <li>✅ Respuestas técnicas inmediatas</li>
            <li>✅ Cualificación automatizada (Distribuidor vs Cliente Directo)</li>
            <li>✅ Derivación inteligente a Ventas</li>
          </ul>
        </div>
        
        <div className="assistant-widget glass-panel">
          <div className="widget-header">
            <span className="agent-status"></span>
            Asistente Técnico Primabake
          </div>
          
          <div className="widget-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <form className="widget-footer" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Escribe tu consulta..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
