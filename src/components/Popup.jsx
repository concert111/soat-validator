import React, { useState, useEffect } from "react";
import "../styles/Popup.css";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Muestra el popup solo una vez al entrar
    setIsVisible(true);
  }, []);

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-btn" onClick={() => setIsVisible(false)}>✖</button>
          <h3>Antes de comprar tu SOAT, es importante que sepas:</h3>
          <ul>
            <li>Por este medio se expide el SOAT para los vehículos matriculados en Colombia.</li>
            <li>Los únicos medios de pago habilitados y autorizados son PSE y Bancolombia.</li>
            <li>No aceptes pagos por WhatsApp ni otros métodos no oficiales.</li>
            <li>El seguro debe ser comprado por el propietario del vehículo.</li>
            <li>Verifica que tu póliza esté cargada en el RUNT después de 24 horas: <a href="#">verifica aquí</a>.</li>
            <li>Si no puedes comprar de forma digital, agenda una cita en un punto físico: <a href="#">agenda aquí</a>.</li>
          </ul>
          <button className="confirm-btn" onClick={() => setIsVisible(false)}>ENTENDIDO</button>
        </div>
      </div>
    )
  );
};

export default Popup;
