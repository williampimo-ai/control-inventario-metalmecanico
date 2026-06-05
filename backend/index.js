const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/v1/inventario/movimiento', (req, res) => {
    const { codigo_barras, id_proceso, cantidad, tipo_movimiento } = req.body;
    console.log("Datos recibidos:", { codigo_barras, id_proceso, cantidad, tipo_movimiento });
    res.status(201).json({ mensaje: "Movimiento registrado con éxito" });
});

app.listen(3001, () => console.log('Backend corriendo en puerto 3001'));