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

  const tarifasSOAT = {
    Motos: {
      "≤100": 117900,
      "≤200": 243400,
      ">200": 326300,
    },
    Ciclomotor: 117900,
    Motocarro: {
      "5_pasajeros": 367800,
      otro: 758300, // por si no aplica el de 5 pasajeros
    },
    CamperosYCamionetas: {
      "0-9": {
       "<1500": 789600,
       "1500-2500": 942800,
       ">2500": 1105900
      },
      "10+": {
        "<1500": 789600,
        "1500-2500": 942800,
        ">2500": 1105900
      }
    },
    AutosFamiliares: {
      "0-9": {
        "<1500": 445300,
        "1500-2500": 542400,
        ">2500": 633500
      },
      "10+": {
        "<1500": 590400,
        "1500-2500": 674700,
        ">2500": 751300
      }
    },
    NegociosYTaxis: {
      "0-9": {
        "<1500": 445300,
        "1500-2500": 542400,
        ">2500": 633500
      },
      "10+": {
        "<1500": 590400,
        "1500-2500": 674700,
        ">2500": 751300      
      }
    },
    SeisPasajerosOMas: {
      "0-9": {
        "<1500": 267900,
        "1500-2500": 332700,
        ">2500": 429000
      },
      "10+": {
        "<1500": 334500,
        "1500-2500": 410900,
        ">2500": 503200
      }
    },
    BusBuseta: {
      Intermunicipal: {
        "<10": 632700,
        "10+": 917700,
      },
      Urbano: 640000,
    },
    CargaOMixto: {
      "<5": 884700,
      "5-15": 1277600,
      ">15": 1615500,
    },
    OficialesEspeciales: {
      "<2500": 794100,
      "2500+": 1063000,
    }
  };
  
  export const calcularValorSoat = (datos) => {
    const {
      claseVehiculo,
      modelo,
      cilindraje,
      pasajeros,
      peso,
      combustible
    } = datos;
  
    const anioActual = new Date().getFullYear();
    const antiguedad = anioActual - parseInt(modelo);
    const grupoAntiguedad = antiguedad >= 10 ? "10+" : "0-9";
  
    const esEco = combustible?.toLowerCase().includes("eléctrico") ||
                  combustible?.toLowerCase().includes("gnv") ||
                  combustible?.toLowerCase().includes("glp");
  
    const getCilindrajeGrupo = (cc) => {
      if (cc < 1500) return "<1500";
      if (cc <= 2500) return "1500-2500";
      return ">2500";
    };
  
    const getCilindrajeMoto = (cc) => {
      if (cc <= 100) return "≤100";
      if (cc <= 200) return "≤200";
      return ">200";
    };
  
    let valor = 0;
  
    switch (claseVehiculo) {
      case "Motos":
        valor = tarifasSOAT.Motos[getCilindrajeMoto(cilindraje)];
        break;
  
      case "Ciclomotor":
        valor = tarifasSOAT.Ciclomotor;
        break;
  
      case "Motocarro":
        valor = pasajeros === 5 ? tarifasSOAT.Motocarro["5_pasajeros"] : tarifasSOAT.Motocarro.otro;
        break;
  
      case "Camperos y Camionetas":
        valor = tarifasSOAT.CamperosYCamionetas[grupoAntiguedad][getCilindrajeGrupo(cilindraje)];
        break;
  
      case "Autos Familiares":
        valor = tarifasSOAT.AutosFamiliares[grupoAntiguedad][getCilindrajeGrupo(cilindraje)];
        break;
  
      case "Negocios y Taxis":
        valor = tarifasSOAT.NegociosYTaxis[grupoAntiguedad][getCilindrajeGrupo(cilindraje)];
        break;
  
      case "Vehículos para 6 o más pasajeros":
        valor = tarifasSOAT.SeisPasajerosOMas[grupoAntiguedad][getCilindrajeGrupo(cilindraje)];
        break;
  
      case "Intermunicipal":
        valor = pasajeros < 10 ? tarifasSOAT.BusBuseta.Intermunicipal["<10"] : tarifasSOAT.BusBuseta.Intermunicipal["10+"];
        break;
  
      case "Servicio Público Urbano":
        valor = tarifasSOAT.BusBuseta.Urbano;
        break;
  
      case "Carga o Mixto":
        if (peso < 5) valor = tarifasSOAT.CargaOMixto["<5"];
        else if (peso <= 15) valor = tarifasSOAT.CargaOMixto["5-15"];
        else valor = tarifasSOAT.CargaOMixto[">15"];
        break;
  
      case "Oficial / Especial / Ambulancia":
        valor = cilindraje <= 2500 ? tarifasSOAT.OficialesEspeciales["<2500"] : tarifasSOAT.OficialesEspeciales["2500+"];
        break;
  
      default:
        valor = 0; // No coincide con ninguna categoría
    }
  
    if (esEco) valor *= 0.9;
  
    return Math.round(valor);
  };
  
  
  
  
  