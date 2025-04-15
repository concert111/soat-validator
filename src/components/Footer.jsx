import React from 'react';
import '../styles/Footer.css';
import icono1 from "../assets/logo-secure.png"

const Footer = () => {
  return (
    <footer className="tenen-footer">
      <div className="tenen-footer-top">
        <div className="footer-certificado">
          <span>Contamos con el certificado de seguridad</span>
          <img
            src={icono1}
            alt="Certificado Comodo"
          />
        </div>

        <div className="footer-pagos">
          <span>Contamos con medios de pago seguros</span>
        
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="tenen-footer-bottom">
        <span>© 2025 SURA. Todos los derechos reservados |  <a href="#">Políticas de uso y seguridad</a> |   <a href="#">Política de privacidad y ley de datos personales</a> </span>      
      </div>
    </footer>
  );
};

export default Footer;
