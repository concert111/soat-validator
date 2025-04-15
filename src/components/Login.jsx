import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validación temporal
    if (password === "admin123") {
      onLogin();
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      <TextField
        label="Contraseña"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Ingresar
      </Button>
    </Container>
  );
};

export default Login;
