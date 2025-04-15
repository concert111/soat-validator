import React, { useState } from 'react';
import '../styles/StepTwo.css';
import { calcularValorSoat } from '../helpers/Functions';
import ResumenSoat from './ResumenSoat';

const FormularioVehiculo = ({ setActiveStep, placa, setPlaca, setSoat, soat }) => {
  const [matriculado, setMatriculado] = useState(false);
 

  const opciones = {
    tipoDocumento: ['C.C.', 'T.I.', 'C.E.', 'Pasaporte', 'NIT'],
    claseVehiculo: [
      'Ciclomotor',
      'Motos',
      'Motocarro',
      'Automóvil',
      'Taxi',
      'Bus',
      'Intermunicipal',
      'Camión',
      'Vehículo de carga o mixto',
    ],
    modelo: Array.from({ length: 2025 - 1980 + 1 }, (_, i) => (2025 - i).toString()),
    combustible: ['Gasolina', 'Diésel', 'Eléctrico', 'Gas', 'Híbrido'],
    ciudades: [
      'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena',
      'Bucaramanga', 'Pereira', 'Manizales', 'Cúcuta', 'Santa Marta'
    ]
  };

  const handleChange = (e) => {
    setPlaca(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReturn = () => {
    setActiveStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultado = {
      claseVehiculo: placa.claseVehiculo,
      modelo: placa.modelo,
      cilindraje: parseInt(placa.cilindraje),
      pasajeros: parseInt(placa.pasajeros),
      combustible: placa.combustible,
    };
    setSoat(calcularValorSoat(resultado));
  };

  return (
      <>
      {soat > 0 &&
       <>
    <div className="barra-superior-soat">
      <div className="placa-container">

        <div className="placa-info">
          <span className="label">PLACA</span>
          <div className="placa-valor">
            {placa.placa.toUpperCase()}  
          </div>
        </div>
        <div className="flecha-triangulo"></div>
      </div>

      <div className="info-item">
        <span className="label">Cilindraje</span>
        <span className="value">{placa.cilindraje}</span>
      </div>

      <div className="info-item">
        <span className="label">Modelo</span>
        <span className="value">{placa.modelo}</span>
      </div>
    </div>
<ResumenSoat formData={placa} soat={soat} setActiveStep={setActiveStep}/></>
}
      {soat === 0  &&
    <div className="formulario-container">
      <><>
          <h2 className="titulo-formulario">Datos del vehículo</h2><div className="alerta-info">
            <span className="icono-info">ℹ️</span>
            <p>
              Los vehículos no matriculados en Colombia, los clásicos/antiguos que requieran pólizas por vigencia inferior a un año y los de servicio público, solo podrán adquirir su SOAT en los puntos de venta presencial.
            </p>
          </div>
        </><div className="campo-radio">
            <label className='labelee'>¿Tu vehículo se encuentra matriculado en Colombia?</label>
            <div className="radio-group">
              <label><input type="radio" name="matriculado" value="no" onChange={() => setMatriculado(false)} /> No</label>
              <label><input type="radio" name="matriculado" value="si" onChange={() => setMatriculado(true)} /> Sí</label>
            </div>
          </div></>
      



      {matriculado && soat === 0 && (
        <form className="formulario" onSubmit={handleSubmit}>
          {/* Datos personales */}
          <input type="text" name="nombre" placeholder="Nombres" onChange={handleChange} required />
          <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
          
          <select name="tipoDocumento" onChange={handleChange} required>
            <option disabled selected value="">Tipo de documento</option>
            {opciones.tipoDocumento.map((doc, i) => (
              <option key={i} value={doc}>{doc}</option>
            ))}
          </select>

          <input type="text" name="numeroDocumento" placeholder="Número de documento" onChange={handleChange} required />
          <select name="ciudadCirculacion" onChange={handleChange} required>
            <option disabled selected value="">Ciudad de circulación</option>
            {opciones.ciudades.map((ciudad, i) => (
              <option key={i} value={ciudad}>{ciudad}</option>
            ))}
          </select>

          <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} required />
          <input type="email" name="correo" placeholder="Correo electrónico" onChange={handleChange} required />

          {/* Datos del vehículo */}
          <select name="claseVehiculo" onChange={handleChange} required>
            <option disabled selected value="">Clase de vehículo</option>
            {opciones.claseVehiculo.map((item, i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>

          <input
            type="number"
            name="pasajeros"
            placeholder="Cantidad de pasajeros"
            onChange={handleChange}
            required
          />

          <select name="modelo" onChange={handleChange} required>
            <option disabled selected value="">Modelo</option>
            {opciones.modelo.map((item, i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>

          <input
            type="number"
            name="cilindraje"
            placeholder="Cilindraje (en c.c.)"
            onChange={handleChange}
            required
          />

          <select name="combustible" onChange={handleChange} required>
            <option disabled selected value="">Tipo de combustible</option>
            {opciones.combustible.map((item, i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>

          <div className="botones">
            <button type="button" className="btn-regresar" onClick={handleReturn}>Regresar</button>
            <button type="submit" className="btn-regresar">Continuar</button>
          </div>
        </form>
      )}
    </div>

    }
</>
  );
};

export default FormularioVehiculo;
