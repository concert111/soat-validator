import React, { useState } from "react";
import "../styles/Header.css";
import logo1 from "../assets/Logo-1.png";
// import banner from "../assets/banner.png";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { FaAngleDown } from "react-icons/fa6";
import {getFechaHoraActual} from "../helpers/Functions"
import { toast } from 'react-toastify';

const Header = ({ activeStep, setActiveStep }) => {
  const [activeTab, setActiveTab] = useState("SEGUROS"); // Tab activo por defecto
  const [loading, setLoading] = useState(false); // Estado para el loading
  const [soat, setSoat] = useState(0)
  const [placa, setPlaca ] = useState({
    fechaConsulta: getFechaHoraActual(),
    placa: "",
    nombre: '',
    apellidos: '',
    tipoDocumento: '',
    numeroDocumento: '',
    ciudadCirculacion: '',
    telefono: '',
    correo: '',
    claseVehiculo: '',
    pasajeros: '',
    modelo: '',
    cilindraje: '',
    combustible: '',
  })


  const handleChange = (e) => {
    setPlaca(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validarPlacaColombia = (placa) => {
    const regexCarro = /^[A-Z]{3}[0-9]{3}$/;         // AAA123
    const regexMoto = /^[A-Z]{3}[0-9]{2}[A-Z]{1}$/;  // AAA12A
    return regexCarro.test(placa.toUpperCase()) || regexMoto.test(placa.toUpperCase());
  };
  
  const handleCotizarClick = () => {
    if (placa.placa) {
      const placaValida = validarPlacaColombia(placa.placa);
      if (placaValida) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setActiveStep(2);
        }, 1000);
      } else {
        toast.error("🚫 La placa no es válida. Ej: AAA123 o AAA12A", {
          position: "top-center",
        });
      }
    } else {
      toast.warn("⚠️ Por favor, ingresa la placa del vehículo", {
        position: "top-center",
      });
    }
  };
  

  return (
    <header>
      {/* Barra Superior */}
      <div className="top-bar">
        <div>
          <img src={logo1} alt="Logo SURA" className="logo" />
        </div>
        <div className="steps">
          {["Cotización", "Datos", "Pago"].map((text, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === activeStep;

            return (
              <div key={stepNumber} className={`step-item ${isActive ? "active" : ""}`}>
                <div className="step-number">{stepNumber}</div>
                <span className="step-text">{text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Barra de Navegación */}
      <nav className="nav-bar">
  {activeStep === 1 && (
    <>
      {[
        { text: "SEGUROS", hasDropdown: false },
        { text: "Inicio", hasDropdown: false },
        { text: "Seguro para personas", hasDropdown: true },
        { text: "Reclamaciones", hasDropdown: true }
      ].map(({ text, hasDropdown }) => (
        <button
          key={text}
          className={`nav-item ${activeTab === text ? "active" : ""}`}
          onClick={() => setActiveTab(text)}
        >
          {text}
          {hasDropdown && <FaAngleDown className="dropdown-icon" />}
        </button>
      ))}

      {/* Botón especial de ayuda */}
      <div className="help">
        <div className="help-circle">?</div>
        <span className="help-text">ayuda</span>
      </div>
    </>
  )}
</nav>

      {/* Header Principal */}
      {activeStep === 1 && (
        <div className="header-main">
          <div className="leftColum">
            <img src="https://images.prismic.io/suraenlinea-v2/ZvxLYLVsGrYSwQS8_Contenido.png?auto=format,compress" alt="Banner" className="banner" />
          </div>
          <div className="right">
            <div className="quote-box">
              <h3>
                Tu <span className="bold">SOAT</span> 100% digital
              </h3>
              <input type="text" name="placa" placeholder="Ingresa tu placa" onChange={handleChange} required/>
              <button className="btn-yellow" onClick={handleCotizarClick}>
                Cotizar
              </button>
            </div>
          </div>
        </div>
      )}
      {activeStep === 2 &&
      <StepTwo  setActiveStep={setActiveStep} placa={placa} setPlaca={setPlaca} setSoat={setSoat} soat={soat}/>
      }
       {activeStep === 3 &&
      <StepThree  activeStep={activeStep} placa={placa} soat={soat} setActiveStep={setActiveStep}/>
      }

      {/* Overlay de Loading */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-content">
            <div className="spinner"></div>
            <p>Cargando...</p>
          </div>
        </div>
      )}

      {/* Pantalla del Paso 2 */}
      {activeStep === 2 && (
        <div className="step-two">
          <div className="step-bar" />
          <div className="footer-placeholder" />
        </div>
      )}
    </header>
  );
};

export default Header;
