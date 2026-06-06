const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.post('/api/v1/inventario/movimiento', async (req, res) => {
    try {
        const { codigo_barras, id_proceso, cantidad, tipo_movimiento } = req.body;
        
        // Validación: asegurar que los datos no estén vacíos
        if (!codigo_barras || !cantidad) {
            return res.status(400).json({ error: "Faltan campos obligatorios" });
        }

        // Insertar en Supabase - convertimos valores a número por seguridad
        const { data, error } = await supabase
            .from('movimientos') 
            .insert([{ 
                codigo_barras: codigo_barras.toString(), 
                id_proceso: parseInt(id_proceso), 
                cantidad: parseInt(cantidad), 
                tipo_movimiento: tipo_movimiento 
            }]);

        if (error) {
            console.error("ERROR DETALLADO DE SUPABASE:", error);
            return res.status(400).json({ error: error.message });
        }
        
        console.log("Movimiento registrado exitosamente");
        res.status(200).json({ mensaje: "¡Guardado con éxito!" });
        
    } catch (err) {
        console.error("Error en servidor:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.listen(3001, () => console.log('Backend corriendo en puerto 3001'));