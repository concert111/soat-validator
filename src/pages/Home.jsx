import React, { useState } from "react";
import Header from "../components/Header";
import ChatBot from "../components/ChatBot";
import Popup from "../components/Popup";
import "../styles/Home.css";
import SoatInfo from "../components/SoatInfo";
import Footer from "../components/Footer";

const Home = () => {
  const [activeStep, setActiveStep] = useState(1); // Controla el paso actual

  return (
    <div className="home" > 
       {/* <Popup /> */}
      {/* Pasamos activeStep y setActiveStep a Header */}
      {/* <Header activeStep={activeStep} setActiveStep={setActiveStep} /> */}

      {/* Mostrar la información solo en el paso 1 */}
      {activeStep === 1 && (
        <SoatInfo/>
      )}
        {/* <ChatBot /> */}
        {/* <Footer/> */}
    </div>
  );
};

export default Home;
