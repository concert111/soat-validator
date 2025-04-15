export const getFechaHoraActual = () => {
    const ahora = new Date();
  
    const fecha = ahora.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  
    const hora = ahora.toLocaleTimeString('es-CO', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  
    return `${fecha} ${hora}`;
  };

  export const calcularValorSoat = (datos) => {
    const {
      claseVehiculo,
      modelo,
      cilindraje,
      pasajeros,
      combustible,
    } = datos;
  
    const anio = parseInt(modelo);
    const antiguedad = new Date().getFullYear() - anio;
    const esAntiguo = antiguedad >= 10;
    const pasajerosNum = parseInt(pasajeros);
    let valor = 0;
  
    // Tablas oficiales basadas en el PDF
    const tarifas = {
      Motos: {
        "≤100": 117900,
        "≤200": 243400,
        ">200": 326300,
      },
      Ciclomotor: 117900,
      Motocarro: 758300,
      Automovil: {
        "0-9": {
          "<1500": 789600,
          "1500-2500": 942800,
          ">2500": 1105900,
        },
        "10+": {
          "<1500": 949200,
          "1500-2500": 1116800,
          ">2500": 1269000,
        },
      },
      Taxi: {
        "0-9": {
          "<1500": 445300,
          "1500-2500": 542400,
          ">2500": 633500,
        },
        "10+": {
          "<1500": 590400,
          "1500-2500": 674700,
          ">2500": 751300,
        },
      },
      Bus: {
        "0-9": {
          "<1500": 267900,
          "1500-2500": 332700,
          ">2500": 429000,
        },
        "10+": {
          "<1500": 334500,
          "1500-2500": 410900,
          ">2500": 503200,
        },
      },
      Intermunicipal: {
        "<10": 632700,
        "10+": 917700,
      },
      Carga: {
        "<5": 884700,
        "5-15": 1277600,
        ">15": 1615500,
      },
    };
  
    // Funciones auxiliares
    const getCilindrajeCategoria = (cc) => {
      if (cc <= 100) return "≤100";
      if (cc <= 200) return "≤200";
      return ">200";
    };
  
    const getCilindrajeGrupo = (cc) => {
      if (cc < 1500) return "<1500";
      if (cc <= 2500) return "1500-2500";
      return ">2500";
    };
  
    const antiguedadGrupo = esAntiguo ? "10+" : "0-9";
  
    // Switch principal por tipo de vehículo
    switch (claseVehiculo) {
      case "Motos":
        valor = tarifas.Motos[getCilindrajeCategoria(cilindraje)];
        break;
  
      case "Ciclomotor":
        valor = tarifas.Ciclomotor;
        break;
  
      case "Motocarro":
        valor = tarifas.Motocarro;
        break;
  
      case "Automóvil":
        valor = tarifas.Automovil[antiguedadGrupo][getCilindrajeGrupo(cilindraje)];
        break;
  
      case "Taxi":
        valor = tarifas.Taxi[antiguedadGrupo][getCilindrajeGrupo(cilindraje)];
        break;
  
      case "Bus":
      case "Buseta":
        valor = tarifas.Bus[antiguedadGrupo][getCilindrajeGrupo(cilindraje)];
        break;
  
      case "Intermunicipal":
        valor = pasajerosNum < 10 ? tarifas.Intermunicipal["<10"] : tarifas.Intermunicipal["10+"];
        break;
  
      case "Camión":
      case "Vehículo de carga o mixto":
        if (cilindraje < 5000) valor = tarifas.Carga["<5"];
        else if (cilindraje <= 15000) valor = tarifas.Carga["5-15"];
        else valor = tarifas.Carga[">15"];
        break;
  
      default:
        valor = 100000; // Por defecto si no se reconoce
    }
  
    // Descuento del 10% para vehículos eléctricos o a gas
    const esEco = combustible?.toLowerCase().includes("eléctrico") ||
                  combustible?.toLowerCase().includes("gnv") ||
                  combustible?.toLowerCase().includes("glp");
  
    if (esEco) valor *= 0.9;
  
    return Math.round(valor);
  };
  ;
  
  
  
  