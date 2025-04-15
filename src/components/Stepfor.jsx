import React, { useState } from "react";
import "../styles/StepTwo.css";

const StepTwo = ({ setActiveStep }) => {
  const [formData, setFormData] = useState({
    fechaInicio: "03-04-2025",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
    fechaExpedicion: "",
    confirmarFechaExpedicion: "",
    nombres: "",
    apellidos: "",
    paisNacimiento: "",
    autorizado: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  
  const handleCompra = () => {
    if (!formData.autorizado) {
      alert("Debes autorizar el tratamiento de datos.");
      return;
    }
    setActiveStep(3); // Avanza a StepThree
  };

  return (
    <div className="step-two-container">
      {/* COLUMNA IZQUIERDA: Vehículo y Formulario */}
      <div className="left-column">
        <div className="vehiculo-info">
          <h2>Datos del vehículo:</h2>
          <div className="info-box">
            <p><strong>Tipo servicio:</strong> PARTICULAR</p>
            <p><strong>Clase:</strong> VEHÍCULO</p>
            <p><strong>Cilindraje:</strong> 7650</p>
          </div>
        </div>

        <div className="form-container">
          <h2>Datos del tomador</h2>

          <label className="label-small">Fecha inicio de vigencia del SOAT</label>
          <input type="text" name="fechaInicio" value={formData.fechaInicio} readOnly />

          <input type="text" name="tipoIdentificacion" placeholder="Tipo de identificación" onChange={handleChange} />
          <input type="text" name="numeroIdentificacion" placeholder="Número de identificación" onChange={handleChange} />
          <input type="date" name="fechaExpedicion" placeholder="Fecha de expedición del documento" onChange={handleChange} />
          <input type="date" name="confirmarFechaExpedicion" placeholder="Confirmar fecha de expedición" onChange={handleChange} />
          <input type="text" name="nombres" placeholder="Nombres" onChange={handleChange} />
          <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} />
          <input type="text" name="paisNacimiento" placeholder="País de nacimiento" onChange={handleChange} />
        </div>
      </div>

      {/* COLUMNA DERECHA: Valor y Contrato */}
      <div className="right-column">
        <div className="valor-pagar">
          <h3>VALOR A PAGAR</h3>
          <span className="valor">$640.000</span>
        </div>

        <label className="checkbox-container">
          <input type="checkbox" name="autorizado" checked={formData.autorizado} onChange={handleChange} />
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

export default StepTwo;
