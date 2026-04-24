# Arquitectura y Diseño del Sistema: GOFIT

## 1. División de Responsabilidades (Frontend vs Backend)

**Frontend (React + Vite):**
- **Responsabilidad:** Interfaz de usuario (UI), experiencia interactiva (UX) y presentación de datos.
- **Estado:** Mantiene el estado local (formularios) y global de sesión (usuario logueado, preferencias de UI).
- **Comunicación:** Realiza peticiones asíncronas a la API para enviar o pedir datos.
- **Regla de oro:** *No debe realizar cálculos de lógica de negocio pesados (como calcular el TDEE) ni almacenar información sensible en texto plano.*

**Backend (Node.js + Express):**
- **Responsabilidad:** Lógica de negocio core (algoritmo generador de rutinas/dietas).
- **Seguridad:** Valida los datos enviados por el usuario antes de procesarlos.
- **Datos:** Interactúa con la base de datos para guardar progresos y perfiles.
- **Autenticación:** Gestión de tokens (JWT) y autorización.

## 2. Componentes Principales y Reutilizables

**Principales (Vistas/Páginas completas):**
- `Onboarding`: Flujo de pasos (wizard) para recoger datos físicos del usuario.
- `Dashboard`: Vista general donde convergen el resumen de dieta y rutina del día actual.
- `WorkoutView`: Modo inmersivo/pantalla completa para interactuar en tiempo real en el gimnasio.

**Reutilizables (UI Kit):**
- `Card`: Contenedor base con estilos premium (glassmorphism, bordes suaves, sombras).
- `Button`: Botón estandarizado con variantes (Primary, Secondary, Outline, Danger).
- `InputField` / `SelectField`: Componentes de formulario accesibles con manejo visual de errores.
- `ProgressBar`: Para indicar el avance en el onboarding o porcentaje de la rutina completada.

## 3. Gestión de Estado (State Management)
- **Estado Local:** `useState` para controlar inputs, modales abiertos/cerrados, o pestañas.
- **Estado Global:** Context API (`UserContext` / `ThemeContext`) para datos transversales. Evitamos Redux inicialmente para mantener el MVP ágil y ligero.
- **Estado de Servidor:** Un Custom Hook (`useFetch` o `useGenerator`) se encargará de guardar temporalmente los datos que vengan de la API.

## 4. Diseño de API REST (Endpoints)

Todas las rutas tendrán el prefijo base `/api/v1`.

### A. Endpoint: Generar Rutina
- **Ruta:** `POST /api/v1/routines/generate`
- **Responsabilidad:** Recibe el perfil físico y devuelve un plan estructurado.

**Request Body (Frontend -> Backend):**
```json
{
  "age": 28,
  "experienceLevel": "intermediate",
  "goal": "hypertrophy",
  "daysPerWeek": 4
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "routineId": "r_12345",
    "days": [
      {
        "dayName": "Día 1: Torso",
        "exercises": [
          { "name": "Press de Banca", "sets": 4, "reps": "8-10", "rest": "90s" },
          { "name": "Dominadas", "sets": 3, "reps": "Al fallo", "rest": "90s" }
        ]
      }
    ]
  }
}
```

### B. Endpoint: Generar Dieta
- **Ruta:** `POST /api/v1/diets/generate`
- **Responsabilidad:** Calcula calorías y macros basándose en el peso y objetivo.

**Request Body:**
```json
{
  "weightKg": 75,
  "heightCm": 180,
  "gender": "male",
  "goal": "fat_loss"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "targetCalories": 2200,
    "macros": { "protein": 160, "carbs": 240, "fats": 66 },
    "meals": [
      { "name": "Desayuno", "food": "Avena con proteína y arándanos", "calories": 400 }
    ]
  }
}
```
