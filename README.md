Sistema de Control de Inventarios en Tiempo Real - Sector Metalmecánico
📝 Descripción del Proyecto
Sistema integral para la digitalización del control de inventarios de una empresa fabricante de herrajes y pasatapas. El proyecto reemplaza el registro manual en papel por una arquitectura full-stack desacoplada, utilizando una API REST que conecta el frontend con una base de datos relacional en la nube.

🚀 Tecnologías Implementadas
Frontend: ReactJS (con Vite y Axios para el consumo de API).

Backend: Node.js con Express, utilizando CORS y dotenv para gestión de variables.

Base de Datos y Seguridad: Supabase (PostgreSQL) con políticas de seguridad (RLS) configuradas para el manejo seguro de datos en tiempo real.

Despliegue: API REST local/cloud-ready preparada para integración con hardware de lectura de código de barras.

📂 Estructura del Repositorio
/frontend: Interfaz de usuario dinámica.

/backend: Lógica del servidor, endpoints de inventario y conexión con Supabase.

Propuesta_Proyecto_Informatico.pdf: Documento técnico formal.

⚙️ Instrucciones de Ejecución
Configuración: Crear archivos .env en /frontend y /backend con las credenciales de Supabase.

Backend: Ejecutar node index.js en la carpeta /backend (puerto 3001).

Frontend: Ejecutar npm run dev en la carpeta /frontend (puerto 5174).

🧑‍💻 Autor
William Gonzalo Pinzón Morales
Electiva - Desarrollo de aplicaciones web
Corporación Universitaria Iberoamericana