import '../styles/SoatBenefits.css';
import IconMedico from '../assets/icon-medico.png';
import IconFallecimiento from '../assets/icon-fallecimiento.png';
import IconIncapacidad from '../assets/icon-incapacidad.png';
import IconTransporte from '../assets/icon-transporte.png';

export default function SoatBenefits() {
  return (
    <section className="beneficios" id="beneficios">
      <h2 className="beneficios-title">Beneficios del SOAT</h2>
      <p className="beneficios-desc">
        En caso de tener un accidente de tránsito en territorio colombiano, este documento obligatorio cubre las lesiones o fallecimiento de conductores, pasajeros o peatones (<strong>no cubre los daños a vehículos de terceros ni a sus propiedades</strong>).
      </p>

      <div className="beneficios-grid">
        <div className="beneficio-box">
          <img src={IconMedico} alt="Icono atención médica" className="beneficio-icon" />
          <div>
            <h3 className="beneficio-title">Gastos de atención médica</h3>
            <p>
              Hasta <strong>701.68 UVT (unidades de valor tributario)</strong>* para la atención médica de las personas involucradas en el accidente (seas tú como conductor, los pasajeros o peatones).<br />
              <small>*Para los vehículos que son parte del rango diferencial, según el <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=200084" target="_blank" rel="noreferrer">Decreto 2497 de 2022</a>, será hasta <strong>263.13 UVT</strong>.</small>
            </p>
          </div>
        </div>

        <div className="beneficio-box">
          <img src={IconFallecimiento} alt="Icono fallecimiento" className="beneficio-icon" />
          <div>
            <h3 className="beneficio-title">Respaldo por fallecimiento</h3>
            <p>
              <strong>750 salarios mínimos diarios legales vigentes</strong> para los beneficiarios de la persona que fallezca como producto del accidente.
            </p>
          </div>
        </div>

        <div className="beneficio-box">
          <img src={IconIncapacidad} alt="Icono incapacidad permanente" className="beneficio-icon" />
          <div>
            <h3 className="beneficio-title">Respaldo por incapacidad permanente</h3>
            <p>
              Hasta <strong>180 salarios mínimos diarios legales vigentes</strong> para ti si quedas con alguna incapacidad permanente como producto del accidente.
            </p>
          </div>
        </div>

        <div className="beneficio-box">
          <img src={IconTransporte} alt="Icono gastos de transporte" className="beneficio-icon" />
          <div>
            <h3 className="beneficio-title">Gastos de transporte</h3>
            <p>
              Hasta <strong>8.77 UVT (unidades de valor tributario)</strong> para transportarte desde el sitio del accidente hasta un centro médico.
            </p>
          </div>
        </div>
      </div>

      <div className="beneficio-link">
      <a 
  href="https://www.sura.co/documents/d/seguros/soat-1" 
  target="_blank" 
  rel="noreferrer"
>
  📄 Ver las condiciones de tu SOAT
</a>

      </div>
    </section>
  );
}
