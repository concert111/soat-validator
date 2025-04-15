import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ConsultaCard from '../components/ConsultaCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addConsulta } from '../services/firebase';

const fakeSOATData = {
  estado: "Vigente",
  vencimiento: "2025-04-01",
  aseguradora: "Seguros Ficticios S.A.",
  precio: "$200,000 COP",
};

const Resultado = () => {
  const { placa } = useParams();

  useEffect(() => {
    // Guardar la consulta en Firebase cuando se visualice la página
    addConsulta(
      placa,
      fakeSOATData.estado,
      fakeSOATData.vencimiento,
      fakeSOATData.aseguradora,
      fakeSOATData.precio
    );
  }, [placa]);

  return (
    <div>
      <Header />
      <ConsultaCard 
        placa={placa}
        estado={fakeSOATData.estado}
        vencimiento={fakeSOATData.vencimiento}
        aseguradora={fakeSOATData.aseguradora}
        precio={fakeSOATData.precio}
      />
      <Footer />
    </div>
  );
};

export default Resultado;
