import "../styles/SoatEvit.css"
import image1 from "../assets/background-rates-soat.png"
import image2 from "../assets/imagen-tigre.png"


export default function SoatEvit() {
  return (
    <section className="" id="evit">
        <div className="fraude-section">
    <div className="fraude-container">
        <img src={image1} alt="Carros fondo" className="fondo" />
        <div className="contenido">
        <h2>Evita el fraude</h2>
        <p>
        Hay personas malintencionadas que ofrecen el SOAT con descuento por WhatsApp, SMS o redes sociales. Asimismo, solicitan que el pago se realice por transferencia a cuentas de terceros o. Todo esto es fraude. 
            <strong> ¡No caigas!</strong>
        </p>
        <p>
            Cómpralo solo por Sura o con tu asesor en el chatSura. 

        </p>
        <div className="botones">
            <button>Ver tarifas</button>
            <button>Consultar tu SOAT</button>
        </div>
        </div>
    </div>
    </div>

    <div className="reclamos-section">
    <div className="reclamos-container">
        <img src={image2} alt="Tigre Sura" className="mascota" />
        <div className="info">
        <h2>Reclamaciones y otras solicitudes de forma digital</h2>
        <ul>
            <li>Para conocer los requisitos de reclamación de cada cobertura y el proceso a llevar a cabo, ingresa <a href="#">aquí</a>.</li>
            <li>Si deseas hacer una reclamación por muerte o incapacidad permanente, necesitas hacer una modificación en tu SOAT o tienes otro tipo de solicitud, radícala <a href="#">aquí</a>.</li>
        </ul>
        </div>
    </div>
    </div>
 

    </section>
  );
}
