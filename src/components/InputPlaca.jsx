import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const InputPlaca = ({ onConsulta }) => {
  const [placa, setPlaca] = useState("");

  const handleChange = (e) => setPlaca(e.target.value);

  return (
    <div>
      <TextField
        label="Ingresa tu placa"
        variant="outlined"
        fullWidth
        value={placa}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={() => onConsulta(placa)}>
        Consultar
      </Button>
    </div>
  );
};

export default InputPlaca;
