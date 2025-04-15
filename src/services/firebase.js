import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCAnj1IX7Eqmzxf4h3r6rtieXb_dTjmQGE",
    authDomain: "all4road-2f783.firebaseapp.com",
    projectId: "all4road-2f783",
    storageBucket: "all4road-2f783.firebasestorage.app",
    messagingSenderId: "233783147324",
    appId: "1:233783147324:web:e8201228cbc359bc003c39"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Función para agregar una consulta a Firestore
const addConsulta = async (placa, estado, vencimiento, aseguradora, precio) => {
  try {
    const docRef = await addDoc(collection(db, "consultas"), {
      placa,
      estado,
      vencimiento,
      aseguradora,
      precio,
      timestamp: new Date(),
    });
    console.log("Consulta guardada con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al agregar consulta: ", e);
  }
};

// Función para cargar la imagen QR a Firebase Storage
const uploadQRImage = async (file) => {
  const storageRef = ref(storage, `qr-images/${file.name}`);
  
  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL; // Retorna el URL de la imagen subida
  } catch (error) {
    console.error("Error al cargar imagen QR: ", error);
    return null;
  }
};

// Función para obtener todas las consultas
const getConsultas = async () => {
  const querySnapshot = await getDocs(collection(db, "consultas"));
  const consultas = [];
  querySnapshot.forEach((doc) => {
    consultas.push(doc.data());
  });
  return consultas;
};

export { addConsulta, getConsultas, uploadQRImage };
