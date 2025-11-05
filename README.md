
# Frontend - Gestión de Usuarios

Aplicación frontend construida con **React + Vite** para demostrar un sistema básico de gestión de usuarios con diferentes perfiles y niveles de acceso.

## Objetivo

Simular un sistema de gestión de usuarios donde:

- Los clientes puedan registrarse e iniciar sesión.
- Dependiendo del perfil (cliente, trabajador, jefe, administrador) se muestren vistas diferentes.
- El administrador pueda:
  - Crear usuarios de distintos tipos.
  - Gestionar la lista de usuarios.

---

## Tecnologías

- [Vite](https://vitejs.dev/) (React + JavaScript)
- React
- CSS (estilos simples con `App.css` / `index.css`)

> El frontend está pensado para consumir una API REST (por ejemplo, en Java + Spring Boot) que gestione las tablas `usuarios` y `perfiles`.

---

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- npm (incluido con Node)

---

## Puesta en marcha

Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
````

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la URL que indique la consola, normalmente:

```txt
http://localhost:5173/
```

