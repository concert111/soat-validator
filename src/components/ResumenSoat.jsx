import React, { useState } from "react";
import "../styles/StepFor.css";

const ResumenSoat = ({ setActiveStep, formData, soat }) => {
      const [autorizado, setAutorizado] = useState(false)
  
      const handleChange = (e) => {
        setAutorizado(prev => ({ ...prev, [e.target.name]: e.target.value }));
      };
 

  
  const handleCompra = () => {
    if (!autorizado) {
      alert("Debes autorizar el tratamiento de datos.");
      return;
    }
    setActiveStep(3); // Avanza a StepThree
  };

  return (
    <div className="step-two-container">
  
      {/* COLUMNA IZQUIERDA: Vehículo y Formulario */}
      <div className="vehiculo-info">
          <h2>Datos del vehículo</h2>
          <div className="info-box">
            <p><strong>Clase:</strong> {formData.claseVehiculo}</p>
            <p><strong>Combustible:</strong> {formData.combustible}</p>
            <p><strong>Pasajeros:</strong> {formData.pasajeros}</p>
          </div>
        </div>

      <div className="left-column">
        
        <div className="form-container">
          <h2>Datos del tomador</h2>
          <p><strong>Nombre: </strong>{formData.nombre}</p>
          <p><strong>Apellidos: </strong> {formData.apellidos}</p>
          <p><strong>Tipo de Documento: </strong> {formData.tipoDocumento}</p>
          <p><strong>Numero de Documento: </strong> {formData.numeroDocumento}</p>
          <p><strong>Ciudad de Circulacion: </strong> {formData.ciudadCirculacion}</p>
          <p><strong>Telefono: </strong> {formData.telefono}</p>
          <p><strong>Correo: </strong> {formData.correo}</p>

        </div>
      </div>

      {/* COLUMNA DERECHA: Valor y Contrato */}
      
      <div className="right-column">
        <div className="valor-pagar">
          <h3>VALOR A PAGAR</h3>
          <span className="valor">{soat.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
        </div>

        <label className="checkbox-container">
          <input type="checkbox" name="autorizado" checked={autorizado} onChange={handleChange} />
          <span>
            Autorizo a SURAMERICANA S. A., en calidad de responsable, el tratamiento de mis datos personales, incluso los biométricos y de salud 
            que son sensibles, con la finalidad de vincularme como cliente. Asimismo, el envío de información, ofertas comerciales y publicitarias, 
            la transferencia o transmisión a terceros en Colombia o exterior y las demás finalidades de la política de privacidad disponible en el sitio web...
          </span>
        </label>

        {/* Botón Comprar */}
        <button className="btn-comprar" onClick={handleCompra}>Comprar</button>
      </div>
    </div>
  );
};

export default ResumenSoat;

