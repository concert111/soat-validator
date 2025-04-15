import '../styles/TenEnCuenta.css';
import icon1 from "../assets/soat-ten-en-cuenta-1.png"
import icon2 from "../assets/soat-ten-en-cuenta-2.png"
import icon3 from "../assets/soat-ten-en-cuenta-3.png"
import icon4 from "../assets/soat-ten-en-cuenta-4.png"
import icon5 from "../assets/soat-icon-after.png"


export default function TenEnCuenta() {
  return (
    <section className="tenen-section">
      <hr className="tenen-divider" />

      <div className="tenen-title">
        <h3>Ten en cuenta:</h3>
      </div>

      <div className="tenen-timeline">
        <div className="tenen-line"></div>

        <div className="tenen-item">
        <img src={icon5} alt="hospital"  className='circle'/>

          <div className="tenen-text-box">
            <img src={icon1} alt="hospital" />
            Toda institución prestadora de servicios de salud está obligada a atenderte si eres víctima de un accidente de tránsito.
          </div>
        </div>

        <div className="tenen-item">
        <img src={icon5} alt="hospital" />

          <div className="tenen-text-box">
            <img src={icon2} alt="ambulancia" />
            Por ley, debes ser trasladado a la institución más cercana después del accidente.
          </div>
        </div>

        <div className="tenen-item">
        <img src={icon5} alt="hospital" />

          <div className="tenen-text-box">
            <img src={icon3} alt="reloj" />
            Tienes dos años para realizar la reclamación por muerte o incapacidad permanente después de ocurrido el hecho (en caso de muerte, lo hacen tus beneficiarios de ley).
          </div>
        </div>

        <div className="tenen-item">
        <img src={icon5} alt="hospital" />

          <div className="tenen-text-box">
            <img src={icon4} alt="documento" />
            <p>

            <strong>El SOAT no paga las incapacidades temporales,</strong> es decir, aquellas que su duración es por un tiempo determinado (días o meses). Estas deben ser tramitadas por la EPS o ARL a la que te encuentres afiliado.
            </p>
          </div>
        </div>
      </div>

      <div className="tenen-contacto">
  <h4>
    Para mayor información y para conocer el estado de tu reclamación puedes comunicarte con:
  </h4>

  <div className="tenen-contacto-grid">
    <p>
      <strong className="tenen-ciudades">En Bogotá, Cali o Medellín:</strong> 
      marca 601 437 8888 desde Bogotá, 604 437 8888 desde Medellín o 602 437 8888 desde Cali (digita tu número de identificación y sigue los pasos que te comunique la grabación).
    </p>
    <p>
      <strong className="tenen-linea">Línea de atención nacional:</strong> 01 8000 51 8888
    </p>
  </div>

  <p>
    <strong>Horario:</strong> de <strong className="tenen-bold">lunes a viernes</strong> de 8:00 a. m. a 6:00 p. m. y <strong className="tenen-bold">sábados</strong> de 8:00 a. m. a 12:00 m.
  </p>
</div>

    </section>
  );
}
