# 📝 Task Manager App

Una aplicación de gestión de tareas construida con **Django** en el backend y **Next.js** en el frontend.

## 🚀 Tecnologías usadas

- **Backend**: Django, Django REST Framework
- **Frontend**: Next.js, React, TailwindCSS
- **Base de datos**: SQLite (desarrollo)
- **Autenticación**: JWT (JSON Web Tokens)

## 📦 Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/lruizap/nextjs-django-crud.git
cd task-manager
```

### 2. Backend (Django)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # o venv\Scripts\activate en Windows
pip install -r requirements.txt

# Configurar variables de entorno (.env)
cp .env.example .env

# Aplicar migraciones
python manage.py migrate

# Crear un superusuario
python manage.py createsuperuser

# Iniciar el servidor de desarrollo
python manage.py runserver
```

La API estará corriendo en `http://localhost:8000/api/tasks`

### 3. Frontend (Next.js)

```bash
cd ../frontend
npm install

# Configurar variables de entorno (.env.local)
cp .env.example .env.local

# Iniciar el servidor de desarrollo
npm run dev
```

La app de frontend estará disponible en `http://localhost:3000/`

---

## ✨ Funcionalidades principales

- Registro, login y logout de usuarios
- CRUD de tareas
- Filtrado de tareas por estado (completadas / pendientes)
- Protección de rutas con autenticación JWT
- Responsive design

## 📂 Estructura de carpetas

```
task-manager/
├── backend/
│   ├── manage.py
│   ├── tasksapi/
│   ├── tasks/
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── styles/
├── README.md
```

---

## 🛠️ Variables de entorno

### Backend (`backend/.env`)

```env
SECRET_KEY=your_secret_key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
```

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000/api/tasks/
```

---

## 📋 To-Do por mejorar

- [ ] Implementar categorías de tareas
- [ ] Soporte para notificaciones push
- [ ] Implementar modo oscuro
- [ ] Test unitarios y de integración

---

## 🧑‍💻 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres contribuir:

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-feature`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva feature'`)
4. Haz push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request
