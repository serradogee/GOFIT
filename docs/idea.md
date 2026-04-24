# Idea de Proyecto: GOFIT - Asistente de Entrenamiento y Nutrición

## Descripción General
GOFIT es una microapp web diseñada para acompañar a los usuarios en su día a día deportivo. La aplicación actúa como un entrenador personal y nutricionista de bolsillo, indicando al usuario exactamente qué rutina de gimnasio debe realizar cada día y qué dieta debe seguir para alcanzar sus objetivos físicos. Utilizando `localStorage` y un simulador de datos (API estática), ofrece una experiencia fluida y rápida sin necesidad de un backend complejo en su versión inicial.

## 1. Problema que intenta resolver
Muchas personas que empiezan en el gimnasio o quieren mejorar su físico se enfrentan a la "parálisis por análisis": no saben qué ejercicios hacer cada día, cómo estructurar sus rutinas, ni qué alimentos comer para complementar su esfuerzo físico. Pagar a un entrenador personal o nutricionista puede ser costoso. GOFIT resuelve este problema eliminando la necesidad de planificar, ofreciendo un plan diario claro, estructurado y directo: "hoy te toca esto en el gimnasio y esto para comer".

## 2. Usuario Objetivo
*   **Principiantes e Intermedios:** Personas que van al gimnasio pero no tienen conocimientos profundos sobre rutinas (ej. push/pull/legs, full body) o macronutrientes.
*   **Personas ocupadas:** Usuarios que no tienen tiempo para buscar recetas o planificar rutinas y solo quieren abrir la app y saber qué tienen que hacer ese día para cumplir sus objetivos.
*   **Entusiastas del fitness:** Personas que buscan llevar un registro sencillo de los días que han cumplido con sus hábitos saludables.

## 3. Funcionalidades Principales (MVP)
*   **Onboarding inicial:** Un formulario rápido para capturar datos básicos (peso, altura, género, objetivo: pérdida de peso, ganancia muscular o mantenimiento) y generar o asignar el plan correspondiente.
*   **Vista Diaria (Dashboard):** Una pantalla principal que muestra la fecha actual, la rutina de gimnasio del día (ejercicios, series, repeticiones) y el menú del día (desayuno, comida, cena, snacks).
*   **Check-in diario:** Botones interactivos para marcar como "Completado" tanto el entrenamiento como las comidas del día.
*   **Generador de datos estáticos/simulados:** Un conjunto predefinido de dietas y rutinas cargadas desde archivos JSON que actúan como una "API simulada", asignando un plan según el perfil del usuario.
*   **Almacenamiento Local:** Uso de `localStorage` para guardar el perfil del usuario, el día actual de la rutina y su progreso (historial de días completados).

## 4. Funcionalidades Opcionales (Nice-to-have)
*   **Modo Oscuro / Claro:** Adaptación al tema del sistema del dispositivo del usuario.
*   **Sustitución de alimentos:** Si al usuario no le gusta una comida de la dieta propuesta, un botón para cambiarla por una alternativa nutricionalmente equivalente.
*   **Temporizador de descanso:** Un pequeño cronómetro integrado en la vista de rutina para controlar los tiempos de descanso recomendados entre series.
*   **Estadísticas Básicas:** Gráficos sencillos o calendarios que muestren cuántos días se han cumplido los objetivos en la última semana o mes.

## 5. Mejoras Futuras
*   **Integración de IA real:** Conectar la aplicación a una API (como Gemini, OpenAI o Claude) para que genere dietas y rutinas 100% personalizadas dinámicamente basadas en alergias, preferencias, equipo disponible y lesiones.
*   **Base de datos en la nube:** Migrar de `localStorage` a una base de datos real (ej. Firebase, Supabase) para que el usuario no pierda sus datos si cambia de dispositivo y pueda tener una cuenta multiplataforma.
*   **Videos demostrativos:** Añadir pequeños clips o animaciones que muestren cómo se realiza cada ejercicio correctamente para evitar lesiones.
*   **Lista de la compra autogenerada:** Basándose en la dieta de la semana generada, crear una lista de supermercado automática para facilitar la compra de los ingredientes necesarios.
