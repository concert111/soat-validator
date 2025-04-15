import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ConsultaCard = ({ placa, estado, vencimiento, aseguradora, precio }) => {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Placa: {placa.toUpperCase()}</Typography>
        <Typography variant="body1">Estado: {estado}</Typography>
        <Typography variant="body1">Vence el: {vencimiento}</Typography>
        <Typography variant="body1">Aseguradora: {aseguradora}</Typography>
        <Typography variant="body1">Precio: {precio}</Typography>
      </CardContent>
    </Card>
  );
};

export default ConsultaCard;
