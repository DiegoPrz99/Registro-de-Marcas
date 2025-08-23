# 🏢 Sistema de Gestión de Marcas

Este proyecto consiste en un **CRUD de Marcas** con un **backend en Python (FastAPI + SQLite)** y un **frontend en Next.js + React**, desarrollado como prueba técnica.
El link del Repositorio donde se encuentra el codigo -> **https://github.com/DiegoPrz99/Registro-de-Marcas**
---

## 🌐 Acceso Público

- **Frontend desplegado:** [https://registro-de-marcas.vercel.app/]
- **Backend desplegado:** [https://backend-production-d19e.up.railway.app/]

---

## 📚 Librerías Utilizadas

### Backend (FastAPI + SQLite)
- `fastapi` → Framework para construir la API.
- `uvicorn` → Servidor ASGI para correr la app.
- `sqlalchemy` → ORM para la base de datos.
- `pydantic` → Validación de modelos de datos.
- `sqlite3` (incluido en Python) → Base de datos liviana.

### Frontend (Next.js + React)
- `next` → Framework de React para frontend.
- `react` y `react-dom` → Librerías base de React.
- `axios` → Cliente HTTP para consumir la API.
- `tailwindcss` → Framework de estilos CSS.
- `postcss` + `autoprefixer` → Herramientas para procesamiento de CSS.

---

## 🔗 Endpoints del CRUD

### **Endpoints disponibles**

| Método | Endpoint          | Descripción                          |
|--------|------------------|--------------------------------------|
| GET    | `/marcas/`       | Listar todas las marcas              |
| GET    | `/marcas/{id}`   | Obtener una marca por su ID          |
| POST   | `/marcas/`       | Crear una nueva marca                |
| PUT    | `/marcas/{id}`   | Actualizar una marca existente       |
| DELETE | `/marcas/{id}`   | Eliminar una marca por su ID         |

---

## ⚙️ Pasos para Correrlo Localmente

## 1. Backend

### ir a la carpeta del backend 

```bash
cd backend
```
### Crear entorno virtual e instalar dependencias y correr el servidor:

```bash
python -m venv venv
source venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload --port 8000
```

## 2. Frontend

### ir a la carpeta del frontend 

```bash
cd frontend
```

### Instalar dependencias y correr la app en modo desarrollo

```bash
npm run dev
```
