import '../styles/SoatInfo.css';
import  image1 from "../assets/razones-para-comprar-soat_sura_compressed.jpg"
import  icon1 from "../assets/soat-icon-1-4-razones-para-comprarlo.png"
import  icon2 from "../assets/CampanaSEL.png"
import  icon3 from "../assets/AONSOAT_Ley_2161_Icono.png"
import  icon4 from "../assets/soat-icon-3-app.png"
import  icon5 from "../assets/IconoSOATtienda.png"
import SoatBenefits from './SoatBenefits';
import SoatEvit from './SoatEvit';
import TenEnCuenta from "../components/TenEnCuenta.jsx"


export default function SoatInfo() {
  return (
    <section className="soat" id="soat">
      <nav className="soat-nav">
        <a href="#razones" className="soat-link">Razones para comprar aquí</a>
        <a href="#beneficios" className="soat-link">Beneficios del SOAT</a>
        <a href="#evit" className="soat-link">Evita el fraude</a>
        <a href="#reclamas" className="soat-link">¿Cómo reclamas?</a>
      </nav>

      <div className="soat-sec" id="razones">
        <div className="soat-box">
          <img src={image1} alt="Pareja feliz" className="soat-img" />
          
          <div className="soat-text">
            <h2 className="soat-title">Con el SOAT SURA vamos más allá</h2>
            <ul className="soat-list">
              <li>
                <img src={icon1} alt="" />
                <p>
                  <strong>Lo compras directamente con SURA</strong> (<a href="#">compra aquí</a>) y lo recibes por correo.
                </p>
              </li>
              <li>
                <img src={icon2} alt="" />
                <p>
                  Puedes <strong>renovar tu SOAT con treinta días de anticipación</strong> a la próxima fecha de vencimiento..
                </p>
              </li>
              <li>
                <img src={icon3} alt="" />
                <p>
                Ten en cuenta que, <strong>si aplicas a los rangos diferenciales por riesgo, </strong>puedes <strong> recibir este beneficio</strong> por comprar tu SOAT.
                </p>
              </li>
              <li>
                <img src={icon4} alt="" />
                <p>
                Después de descargarlo en la <strong>App Seguros SURA</strong>, queda disponible para que lo consultes, incluso <strong>sin tener internet</strong>.
                </p>
              </li>
              <li>
                <img src={icon5} alt="" />
                <p>
  Realiza tu compra del SOAT en nuestra web de forma segura. <a href="#">Ingresa aquí</a>.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SoatBenefits/>
      <SoatEvit/>
      <TenEnCuenta/>
    </section>
  );
}
