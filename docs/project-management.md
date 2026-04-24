# Gestión del Proyecto: GOFIT

Este documento describe cómo se está organizando y desarrollando el proyecto GOFIT utilizando principios de metodologías ágiles adaptados para un equipo pequeño/desarrollador individual.

## Flujo de Trabajo (Workflow)

El flujo de trabajo se basa en un tablero Kanban simplificado para maximizar la visibilidad y minimizar la burocracia.

### Tablero Kanban
Utilizamos un enfoque visual (documentado en `docs/trello.md` y gestionado localmente/GitHub Projects) con las siguientes columnas:
1.  **Backlog:** Funcionalidades futuras, ideas ("Nice to have") y posibles mejoras.
2.  **Todo (Por Hacer):** Tareas priorizadas que deben desarrollarse a continuación.
3.  **In Progress (En Progreso):** La tarea en la que se está trabajando activamente en este momento. El trabajo en curso (WIP) se limita a 1 o 2 tareas simultáneas para mantener el foco.
4.  **Review (Revisión):** Código terminado que necesita ser probado y revisado antes de considerarse final.
5.  **Done (Hecho):** Funcionalidad probada, integrada y subida al repositorio de producción.

## División del Trabajo
Siguiendo la metodología ágil, el trabajo no se planifica de golpe como un proyecto "Waterfall" (en cascada), sino de forma incremental:
1.  **Definición de Funcionalidades (Épicas):** Como "Dashboard Diario" o "API Simulada".
2.  **Desglose en Tareas Técnicas:** Las tarjetas se dividen en acciones atómicas (ej. "Crear componente X", "Lógica Y en localStorage").
3.  **Iteraciones (Sprints ligeros):** Nos enfocamos en completar una "Tarjeta" completa antes de pasar a la siguiente, asegurando que siempre haya una versión funcional del producto (MVP progresivo).

## Control de Versiones
Todo el código está alojado en GitHub. Cada avance significativo dentro de una tarjeta en progreso se registra mediante commits semánticos y claros para facilitar el seguimiento de los cambios y la posibilidad de revertirlos en caso de error.
