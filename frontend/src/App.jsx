import { useState } from 'react';
import axios from 'axios';

function App() {
  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    codigo_barras: '',
    id_proceso: '',
    cantidad: '',
    tipo_movimiento: 'entrada'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviamos los datos al backend (puerto 3001)
      const res = await axios.post('http://localhost:3001/api/v1/inventario/movimiento', formData);
      alert('¡Éxito! ' + res.data.mensaje);
      
      // Limpiamos el formulario
      setFormData({ codigo_barras: '', id_proceso: '', cantidad: '', tipo_movimiento: 'entrada' });
    } catch (error) {
      alert('Error al registrar: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="p-5">
      <h1>Control de Inventario</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input placeholder="Código de Barras" value={formData.codigo_barras} onChange={(e) => setFormData({...formData, codigo_barras: e.target.value})} className="border p-2" />
        <input placeholder="ID Proceso" value={formData.id_proceso} onChange={(e) => setFormData({...formData, id_proceso: e.target.value})} className="border p-2" />
        <input placeholder="Cantidad" value={formData.cantidad} onChange={(e) => setFormData({...formData, cantidad: e.target.value})} className="border p-2" />
        <button type="submit" className="bg-blue-500 text-white p-2">Registrar Movimiento</button>
      </form>
    </div>
  );
}

export default App;