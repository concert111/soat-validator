import React, { useState } from 'react';
import { uploadQRImage } from '../services/firebase';

const AdminPanel = () => {
  const [qrImage, setQrImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setQrImage(file);
    }
  };

  const handleUpload = async () => {
    if (!qrImage) {
      alert("Por favor selecciona una imagen primero.");
      return;
    }

    const url = await uploadQRImage(qrImage);
    if (url) {
      setImageUrl(url);
      alert("Imagen QR cargada con éxito.");
    } else {
      alert("Hubo un error al cargar la imagen QR.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange} 
        className="border p-2 mb-4 rounded"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleUpload}
      >
        Subir imagen QR
      </button>

      {imageUrl && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Imagen cargada:</h2>
          <img src={imageUrl} alt="QR cargado" className="mt-2 w-32 h-32" />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
