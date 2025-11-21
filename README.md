# Client-env Proyecto Usuarios AJE

Aplicación web frontend construida con React + Vite para la gestión completa de usuarios con diferentes perfiles y niveles de acceso.

## 📋 Descripción

Este proyecto es la interfaz de usuario (cliente) de un sistema completo de gestión de usuarios. Proporciona una experiencia visual e intuitiva para interactuar con la API REST del backend, permitiendo registro, autenticación y administración de usuarios según sus perfiles y permisos.

El sistema simula diferentes niveles de acceso donde:
- Los **clientes** pueden registrarse e iniciar sesión
- Según el **perfil** (cliente, trabajador, jefe, administrador) se muestran vistas diferentes
- Los **administradores** tienen acceso completo para:
  - Crear usuarios de distintos tipos
  - Gestionar la lista completa de usuarios
  - Asignar perfiles y permisos

## 🚀 Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Build tool y servidor de desarrollo ultrarrápido
- **JavaScript** - Lenguaje de programación
- **CSS** - Estilos personalizados (App.css / index.css)
- **Bootstrap** (opcional) - Framework CSS para diseño responsivo

## 🔗 Integración con Backend

Este frontend está diseñado para consumir la **API REST del backend** desarrollada con Spring Boot.

**Repositorio del backend:** [Back-end-proyecto-usuarios-AJE](https://github.com/Eduu115/Back-end-proyecto-usuarios-AJE.git)

El backend gestiona las tablas `usuarios` y `perfiles` en MySQL, proporcionando todos los endpoints necesarios para las operaciones CRUD y autenticación.

## 📁 Estructura del Proyecto

```
src/
├── components/      # Componentes React reutilizables
├── pages/          # Vistas/páginas de la aplicación
├── services/       # Servicios para consumir la API
├── App.jsx         # Componente principal
├── App.css         # Estilos principales
└── index.css       # Estilos globales
```

## 🔧 Configuración Inicial

### Prerrequisitos

- **Node.js** versión 18 o superior - [Descargar](https://nodejs.org/)
- **npm** (incluido con Node.js)
- **Backend corriendo** en `http://localhost:9001`

### Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Eduu115/Client-env-proyecto-AJE.git
   cd Client-env-proyecto-AJE
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar la URL del backend:**
   
   Asegúrate de que la aplicación apunte al backend correcto. Busca el archivo de configuración de servicios y verifica que la URL base sea:
   ```javascript
   const API_URL = 'http://localhost:9001';
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   
   La aplicación estará disponible en:
   ```
   http://localhost:5173/
   ```

### Build para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

Para previsualizar el build:

```bash
npm run preview
```

## 🖥️ Funcionalidades Principales

### Para Todos los Usuarios
- ✅ **Registro**: Crear una cuenta nueva en el sistema
- ✅ **Login**: Iniciar sesión con credenciales
- ✅ **Perfil**: Ver y editar información personal

### Para Administradores
- ✅ **Dashboard completo**: Panel de control administrativo
- ✅ **Gestión de usuarios**: Ver lista completa de usuarios registrados
- ✅ **Crear usuarios**: Registrar nuevos usuarios con cualquier perfil
- ✅ **Editar usuarios**: Modificar información y perfiles de usuarios existentes
- ✅ **Eliminar usuarios**: Dar de baja usuarios del sistema
- ✅ **Asignar perfiles**: Cambiar roles y permisos de usuarios

### Vistas por Perfil

La aplicación muestra diferentes vistas según el perfil del usuario autenticado:

- **Cliente**: Vista básica con funcionalidades limitadas
- **Trabajador**: Acceso a herramientas de trabajo
- **Jefe**: Panel de gestión intermedio
- **Administrador**: Acceso completo al sistema

## 🔐 Autenticación

La aplicación implementa autenticación básica HTTP que se sincroniza con el backend:

- Las credenciales se envían en cada petición al backend
- El sistema mantiene la sesión del usuario
- Los permisos se validan tanto en frontend como backend
- Cierre de sesión seguro

## 🎨 Interfaz de Usuario

- **Diseño responsivo**: Se adapta a móviles, tablets y escritorio
- **Navegación intuitiva**: Menús claros según permisos del usuario
- **Feedback visual**: Mensajes de éxito, error y confirmación
- **Estilos personalizados**: CSS moderno y limpio

## 🔄 Consumo de la API

El frontend consume todos los endpoints del backend:

### Endpoints de Usuarios
- `GET /usuarios/` - Listar todos los usuarios
- `POST /usuarios/login` - Iniciar sesión
- `POST /usuarios/registro` - Registro de nuevos usuarios
- `POST /usuarios/registro/admin` - Registro con asignación de perfil
- `PUT /usuarios/actualizar/{username}` - Actualizar usuario
- `DELETE /usuarios/eliminar/{username}` - Eliminar usuario

### Endpoints de Perfiles
- `GET /perfiles/` - Listar perfiles disponibles
- `GET /perfiles/{idPerfil}` - Obtener perfil específico

## 📝 Notas de Desarrollo

- Asegúrate de tener el backend corriendo antes de iniciar el frontend
- El frontend usa Vite para hot-reload automático durante el desarrollo
- CORS está habilitado en el backend para permitir peticiones desde localhost
- Para producción, configura las variables de entorno apropiadas

## 🛠️ Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Compila para producción
npm run preview      # Previsualiza el build de producción
npm run lint         # Ejecuta el linter (si está configurado)
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

## 📄 Licencia

Este proyecto está bajo la Licencia Apache 2.0 - ver el archivo [LICENSE](LICENSE) para más detalles.

## ✒️ Autores

- **Eduardo Serrano** - [GitHub](https://github.com/Eduu115)
- **Anthony** - [GitHub](https://github.com/Tony1406)
- **Juan Guevara** - [GitHub](https://github.com/juan-guevara-m)

## 🔗 Proyecto Completo

Este es el **frontend** del sistema completo. Para el funcionamiento completo necesitas:

1. **Backend (API REST)**: [Back-end-proyecto-usuarios-AJE](https://github.com/Eduu115/Back-end-proyecto-usuarios-AJE.git)
2. **Frontend (este proyecto)**: Client-env-proyecto-AJE

---

⭐ Si este proyecto te ha sido útil, ¡no olvides darle una estrella!
