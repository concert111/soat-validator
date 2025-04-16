import React, { useState } from 'react';
import '../styles/StepTwo.css';
import { calcularValorSoat } from '../helpers/Functions';
import ResumenSoat from './ResumenSoat';

const FormularioVehiculo = ({ setActiveStep, placa, setPlaca, setSoat, soat }) => {
  const [matriculado, setMatriculado] = useState(false);
  const [claseSeleccionada, setClaseSeleccionada] = useState('');


  const opciones = {
    cilindrajeMoto: [
      { label: "Hasta 100 c.c.", value: "≤100" },
      { label: "Entre 101 y 200 c.c.", value: "≤200" },
      { label: "Más de 200 c.c.", value: ">200" },
      { label: "Motocicletas eléctricas", value: "eléctrico" }  // Nueva categoría
    ],
    cilindrajeCarro: [
      { label: "Menos de 1.500 c.c.", value: "<1500" },
      { label: "Entre 1.500 y 2.500 c.c.", value: "1500-2500" },
      { label: "Más de 2.500 c.c.", value: ">2500" },
      { label: "Eléctrico", value: "eléctrico" },  // Nueva categoría
      { label: "Híbrido", value: "híbrido" }  // Nueva categoría
    ],
    pasajeros: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+', '12', '15', '20+', '30+'],  // Más opciones
    tipoDocumento: ['C.C.', 'T.I.', 'C.E.', 'Pasaporte', 'NIT', 'RUT'],  // Añadido RUT
    claseVehiculo: [
      'Ciclomotor',
      'Motos',
      'Motocarro',
      'Camperos y Camionetas',
      'Autos Familiares',
      'Negocios y Taxis',
      'Vehículos para 6 o más pasajeros',
      'Intermunicipal',
      'Servicio Público Urbano',
      'Carga o Mixto',
      'Oficial / Especial / Ambulancia',
      'Motocicletas Eléctricas',  // Nueva categoría
      'Vehículos de Emergencia Especializados'  // Nueva categoría
    ],
    modelo: Array.from({ length: 2026 - 1960 + 1 }, (_, i) => (2026 - i).toString()),  // Extendemos hasta 2040
    combustible: ['Gasolina', 'Diésel', 'Eléctrico', 'Gas', 'GNV', 'GLP', 'Híbrido', 'Bioetanol', 'Etanol'],  // Nuevas opciones
    ciudades: [
      'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena',
      'Bucaramanga', 'Pereira', 'Manizales', 'Cúcuta', 'Santa Marta',
      'Ibagué', 'Neiva', 'Villavicencio', 'Popayán', 'Pasto',
      'Montería', 'Sincelejo', 'Armenia', 'Valledupar', 'Tunja',
      'Riohacha', 'Quibdó', 'Yopal', 'Florencia', 'San José del Guaviare',
      'Mocoa', 'Leticia', 'Mitú', 'Puerto Carreño', 'Turbo',
      'Soacha', 'Itagüí', 'Palmira', 'Soledad', 'Tuluá',
      'Facatativá', 'Zipaquirá', 'Girardot', 'Chía', 'Malambo',
      'Mosquera', 'Fusagasugá', 'Sogamoso', 'Duitama', 'Rionegro',
      'Arauquita', 'La Dorada', 'San Andrés', 'Turbana', 'Magangué', 'Villanueva'
    ]  // Nuevas ciudades
  };
  
  
  

  const handleChange = (e) => {
    if (e.target.name === "claseVehiculo") {
      setClaseSeleccionada(e.target.value);
    }
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

  <select name="tipoDocumento" onChange={handleChange} defaultValue="" required>
    <option disabled value="">Tipo de documento</option>
    {opciones.tipoDocumento.map((doc, i) => (
      <option key={i} value={doc}>{doc}</option>
    ))}
  </select>

  <input type="text" name="numeroDocumento" placeholder="Número de documento" onChange={handleChange} required />

  <select name="ciudadCirculacion" onChange={handleChange} defaultValue="" required>
    <option disabled value="">Ciudad de circulación</option>
    {opciones.ciudades.map((ciudad, i) => (
      <option key={i} value={ciudad}>{ciudad}</option>
    ))}
  </select>

  <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} required />
  <input type="email" name="correo" placeholder="Correo electrónico" onChange={handleChange} required />

  {/* Datos del vehículo */}
  <select
    name="claseVehiculo"
    onChange={(e) => {
      handleChange(e);
      setClaseSeleccionada(e.target.value);
    }}
    defaultValue=""
    required
  >
    <option disabled value="">Clase de vehículo</option>
    {opciones.claseVehiculo.map((item, i) => (
      <option key={i} value={item}>{item}</option>
    ))}
  </select>

  {/* Pasajeros */}
  {['Bus', 'Buseta', 'Intermunicipal', 'Vehículos para 6 o más pasajeros', 'Carga o Mixto'].includes(claseSeleccionada) && (
    <select name="pasajeros" onChange={handleChange} defaultValue="" required>
      <option disabled value="">Cantidad de pasajeros</option>
      {opciones.pasajeros.map((num, i) => (
        <option key={i} value={num}>{num}</option>
      ))}
    </select>
  )}

  <select name="modelo" onChange={handleChange} defaultValue="" required>
    <option disabled value="">Modelo</option>
    {opciones.modelo.map((item, i) => (
      <option key={i} value={item}>{item}</option>
    ))}
  </select>

  {/* Cilindraje */}
  {['Motos', 'Motocarro', 'Ciclomotor', 'Motocicletas Eléctricas'].includes(claseSeleccionada) ? (
    <select name="cilindraje" onChange={handleChange} defaultValue="" required>
      <option disabled value="">Cilindraje</option>
      {opciones.cilindrajeMoto.map((cc, i) => (
        <option key={i} value={cc.value}>{cc.label}</option>
      ))}
    </select>
  ) : (
    claseSeleccionada && (
      <select name="cilindraje" onChange={handleChange} defaultValue="" required>
        <option disabled value="">Cilindraje</option>
        {opciones.cilindrajeCarro.map((cc, i) => (
          <option key={i} value={cc.value}>{cc.label}</option>
        ))}
      </select>
    )
  )}

  <select name="combustible" onChange={handleChange} defaultValue="" required>
    <option disabled value="">Tipo de combustible</option>
    {opciones.combustible.map((item, i) => (
      <option key={i} value={item}>{item}</option>
    ))}
  </select>

  {/* Botones */}
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
