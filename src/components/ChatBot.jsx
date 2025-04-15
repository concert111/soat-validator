import React, { useState } from "react";
import "../styles/ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy el asistente virtual. ¿Cómo puedo ayudarte?" }
  ]);

  const handleQuestion = (question) => {
    let answer = "Lo siento, no entiendo esa pregunta.";

    if (question === "¿Cómo puedo pagar?") {
      answer = "Puedes pagar con Bancolombia, Nequi o PSE.";
    } else if (question === "¿Cuánto tiempo tengo para pagar?") {
      answer = "Tienes 20 minutos para completar tu pago.";
    } else if (question === "¿Dónde veo mi factura?") {
      answer = "Puedes descargarla en la sección de pagos.";
    } else if (question === "¿Cómo contacto soporte?") {
      answer = "Escríbenos a soporte@tusitio.com.";
    } else if (question === "¿Puedo pagar con tarjeta?") {
      answer = "Actualmente solo aceptamos Bancolombia y Nequi.";
    }

    setMessages([...messages, { sender: "user", text: question }, { sender: "bot", text: answer }]);
  };

  return (
    <div className="chatbot-container">
      <div className={`chat-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Asistente Virtual 🤖</div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            {["¿Cómo puedo pagar?", "¿Cuánto tiempo tengo para pagar?", "¿Dónde veo mi factura?", "¿Cómo contacto soporte?", "¿Puedo pagar con tarjeta?"].map((q, idx) => (
              <button key={idx} onClick={() => handleQuestion(q)}>
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
