import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const registrarMovimiento = async () => {
    try {
      // Petición asincrónica al endpoint definido en tu actividad [cite: 24, 55]
      const response = await axios.post('http://localhost:3001/api/v1/inventario/movimiento', {
        codigo_barras: "7701234567890",
        id_proceso: 3,
        cantidad: 50,
        tipo_movimiento: "ENTRADA"
      });
      alert(response.data.mensaje); // Confirmación de registro 
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Control de Inventario - Planta</h1>
      <button onClick={registrarMovimiento} style={{ padding: '15px 30px', fontSize: '16px' }}>
        Registrar Entrada (Pasatapas)
      </button>
    </div>
  );
}

export default App;