# Metodologías Ágiles: Agile, Scrum y Kanban

## ¿Qué es Agile y cuál es su objetivo?

Agile (o enfoque ágil) no es una metodología estricta, sino una filosofía o mentalidad para el desarrollo de software basada en los valores y principios del Manifiesto Ágil. 

**Su objetivo principal** es entregar valor al cliente de forma rápida y continua, priorizando la adaptabilidad frente a la planificación rígida. Agile busca dividir proyectos grandes en entregas pequeñas y funcionales, fomentando la colaboración constante entre el equipo de desarrollo y el cliente, la mejora continua y la capacidad de responder ágilmente a los cambios o imprevistos del mercado.

---

## Scrum y sus conceptos principales

Scrum es uno de los marcos de trabajo (frameworks) ágiles más utilizados. Se basa en estructurar el trabajo en ciclos cortos y predecibles, fomentando la transparencia, la inspección y la adaptación.

### Conceptos principales de Scrum:

*   **Sprints:** Son iteraciones o ciclos de trabajo cortos y de duración fija (generalmente entre 1 y 4 semanas). Al final de cada sprint, el equipo debe entregar un "incremento" de producto que sea completamente funcional.
*   **Roles:**
    *   **Product Owner (Dueño del Producto):** Es la voz del cliente. Se encarga de definir qué hay que construir, prioriza las tareas y asegura que el equipo trabaje en lo que aporta el máximo valor posible al negocio.
    *   **Scrum Master:** Es un facilitador. Ayuda al equipo a entender y aplicar la teoría de Scrum, elimina los bloqueos u obstáculos que impiden el progreso del equipo y protege al equipo de interrupciones externas.
    *   **Development Team (Equipo de Desarrollo):** Un grupo de profesionales técnicos que se autoorganizan para realizar el trabajo y transformar los requisitos en un producto real.
*   **Backlog:**
    *   **Product Backlog:** Es la lista completa, ordenada y viva de todo lo que se necesita hacer en el producto (nuevas funciones, mejoras, arreglo de bugs). El Product Owner es responsable de mantenerla.
    *   **Sprint Backlog:** Es el subconjunto de tareas del Product Backlog que el equipo selecciona y se compromete a completar durante el Sprint actual.
*   **Eventos (Reviews y reuniones):**
    *   **Sprint Planning:** Reunión al inicio del sprint donde todo el equipo decide qué trabajo se va a abordar y cómo se va a hacer.
    *   **Daily Scrum:** Reunión diaria muy breve (máximo 15 minutos) para sincronizar el trabajo, ver en qué se está trabajando y detectar problemas.
    *   **Sprint Review:** Al finalizar el sprint, el equipo muestra el trabajo terminado a los clientes o interesados (stakeholders) para recibir feedback directo.
    *   **Sprint Retrospective:** Reunión interna del equipo justo después de la Review para analizar su propio proceso: qué funcionó bien, qué falló y cómo pueden trabajar mejor en el siguiente sprint.

---

## Kanban y la organización de tareas

Kanban es un método de trabajo muy visual diseñado para gestionar y optimizar el flujo de tareas. A diferencia de Scrum, no utiliza ciclos de tiempo limitados, sino un flujo de entrega continua.

**¿Cómo se usa para organizar tareas?**
El núcleo de esta metodología es el **Tablero Kanban**, que mapea visualmente el proceso de trabajo mediante columnas que representan distintos estados (los más básicos son: *Por Hacer (To Do), En Progreso (In Progress)* y *Hecho (Done)*). 

Las tareas se escriben en tarjetas y avanzan por estas columnas. La regla de oro de Kanban es **limitar el trabajo en curso (WIP - Work In Progress)**. Esto significa establecer un máximo de tareas que pueden estar en la columna "En Progreso" al mismo tiempo. Al hacer esto, el equipo no puede empezar tareas nuevas si no han terminado las actuales, lo que fuerza a terminar lo empezado, evita la sobrecarga y hace visibles los "cuellos de botella" (donde se atasca el trabajo).

---

## Diferencias entre Scrum y Kanban

Aunque ambas nacen de la filosofía Agile, tienen diferencias operativas clave:

1.  **Ritmo y Estructura:** Scrum funciona mediante "bloques de tiempo" cerrados (Sprints). Una vez que empieza un Sprint, no se deben añadir tareas nuevas. Kanban funciona por "flujo continuo"; puedes añadir nuevas tareas a la columna de "Por Hacer" en cualquier momento y el equipo las irá tomando según haya hueco.
2.  **Roles:** Scrum exige definir explícitamente quién es el Product Owner, el Scrum Master y el Equipo. Kanban no prescribe roles obligatorios; el equipo actual asume las responsabilidades necesarias sin cambiar sus títulos.
3.  **Reglas y Flexibilidad:** Scrum tiene reglas rígidas sobre sus eventos y artefactos para asegurar que el proceso funcione. Kanban es mucho más flexible, centrándose solo en visualizar el flujo de trabajo existente y mejorarlo paso a paso.
4.  **Métricas:** En Scrum se mide la "Velocidad" (cuánto trabajo logra el equipo en un sprint). En Kanban se mide el "Lead Time" o tiempo de ciclo (cuánto tiempo transcurre desde que se pide una tarea hasta que se entrega).

---

## ¿En qué situaciones usar cada metodología?

### Situaciones ideales para Scrum:
*   **Proyectos de desarrollo de software nuevos o grandes** donde los requisitos no están del todo claros desde el principio y se espera que cambien.
*   Cuando se necesita **previsibilidad** y entregar nuevas versiones del producto en intervalos regulares para validar con el mercado.
*   Equipos que requieren una **estructura clara** y rutinas definidas para mantenerse enfocados.

### Situaciones ideales para Kanban:
*   **Mantenimiento, soporte técnico o resolución de incidencias**, donde las prioridades cambian de un día para otro y no se puede planificar a varias semanas vista.
*   Equipos que tienen un **flujo constante de peticiones** independientes (por ejemplo, creación de contenido, tareas de marketing, o DevOps).
*   Equipos experimentados que ya trabajan bien juntos y solo buscan **hacer visible su trabajo** para optimizarlo, sin el "peso" de las reuniones obligatorias de Scrum.
