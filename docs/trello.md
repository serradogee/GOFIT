# Tablero Trello (Kanban) - GOFIT

Este documento representa la estructura de nuestro tablero de Trello para el desarrollo del proyecto GOFIT. Las tarjetas se irán moviendo por las columnas a medida que avancemos.

## Columnas

1. **Backlog** (Ideas y cosas futuras)
2. **Todo** (Tareas pendientes para hacer)
3. **In Progress** (Lo que estamos programando ahora)
4. **Review** (En revisión o pruebas)
5. **Done** (Terminado)

---

## Tarjetas y Subtareas

A continuación se detallan las tarjetas que deben crearse en Trello, divididas en sus tareas técnicas:

### Tarjeta 1: Configuración Inicial del Proyecto
**Columna Actual:** Done
*   [x] Inicializar proyecto con Vite + React + TypeScript.
*   [x] Configurar Tailwind CSS para los estilos.
*   [x] Estructurar carpetas (components, pages, hooks, data, etc.).
*   [x] Crear repositorio y subir el código base.

### Tarjeta 2: Generador de Datos Simulados (Mock API)
**Columna Actual:** Todo
*   [ ] Crear `dietas.json` con menús de ejemplo (volumen, definición).
*   [ ] Crear `rutinas.json` con entrenamientos de ejemplo (push/pull/legs).
*   [ ] Crear funciones de servicio para leer y asignar estos datos según el objetivo del usuario.

### Tarjeta 3: Pantalla de Onboarding (Perfil de Usuario)
**Columna Actual:** Todo
*   [ ] Diseñar e implementar el componente del formulario inicial (peso, altura, género, objetivo).
*   [ ] Programar la lógica para validar el formulario.
*   [ ] Guardar el perfil generado en `localStorage`.
*   [ ] Implementar redirección automática al Dashboard si el usuario ya está registrado.

### Tarjeta 4: Vista Diaria (Dashboard)
**Columna Actual:** In Progress
*   [x] Maquetar el Layout principal (Header, Fecha de hoy).
*   [x] Crear componente `DietSection` para mostrar las comidas del día.
*   [x] Crear componente `WorkoutSection` para mostrar la rutina del gimnasio.
*   [ ] Conectar la vista con los datos del `localStorage` y los JSONs.

### Tarjeta 5: Sistema de Check-in y Progreso
**Columna Actual:** Todo
*   [ ] Añadir botones interactivos de "Completado" en rutina y dieta.
*   [ ] Implementar la lógica para guardar el estado de completado en `localStorage`.
*   [ ] Programar la lógica para avanzar al "día siguiente" en el plan una vez que todo está completado.

### Tarjeta 6: Funcionalidades Opcionales (Nice-to-have)
**Columna Actual:** Backlog
*   [ ] Implementar el Modo Oscuro/Claro automático.
*   [ ] Añadir temporizador de descanso en la vista de rutinas.
*   [ ] Gráfico básico de días completados.

---

*Nota: A medida que programemos, utilizaremos esta estructura para organizarnos. Como asistente de IA, mantendré un seguimiento interno de estas tareas.*
