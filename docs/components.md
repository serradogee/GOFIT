# Catalogo de Componentes Reutilizables (GOFIT)

Este documento describe los componentes reutilizables creados y su uso dentro de la app en JavaScript.

## 1) `PageHeader`

- **Ruta:** `src/components/PageHeader.jsx`
- **Objetivo:** Unificar cabeceras de pantallas (`DietView`, `WorkoutView`, `DaySelection`).
- **Props (JavaScript):**
  - `title: string`
  - `subtitle?: string`
  - `accent?: ReactNode`
- **Composicion:** permite inyectar `accent` como nodo React para destacar texto o badges.

## 2) `FeatureCard`

- **Ruta:** `src/components/FeatureCard.jsx`
- **Objetivo:** Tarjeta accionable reutilizable para navegacion de modulos.
- **Props (JavaScript):**
  - `title: string`
  - `icon: ReactNode`
  - `watermark: string`
  - `onClick: () => void`
- **Uso actual:** `DaySelection` para opciones de `Ejercicio` y `Dieta`.
- **Estilos:** Tailwind + clase compartida `premium-card`.

## 3) `DataListCard`

- **Ruta:** `src/components/DataListCard.jsx`
- **Objetivo:** Renderizar listas de entidades (ej. ejercicios) de forma configurable.
- **Props (JavaScript):**
  - `items: Array<{ id: string, ... }>`
  - `columns: Array<{ label: string, render: (item) => ReactNode }>`
  - `header: (item) => ReactNode`
  - `actions?: (item) => ReactNode`
- **Composicion:** el padre controla estructura visual de fila mediante `header` y `actions`.
- **Uso actual:** `WorkoutView`.

## 4) `BaseModal`

- **Ruta:** `src/components/BaseModal.jsx`
- **Objetivo:** Contenedor modal reutilizable para flujos de edicion o confirmacion.
- **Props (JavaScript):**
  - `isOpen: boolean`
  - `title: string`
  - `onClose: () => void`
  - `children: ReactNode`
- **Composicion:** renderiza cualquier contenido a traves de `children`.
- **Uso actual:** apertura de edicion de perfil desde `Header`.

## 5) `ProfileForm`

- **Ruta:** `src/components/ProfileForm.jsx`
- **Objetivo:** Formulario para editar perfil desde estado global.
- **Props (JavaScript):**
  - `profile: object`
  - `onSubmit: (nextProfile) => void`
- **Fuente de datos:** `AppStateContext` (estado global cliente).
- **Estilos:** inputs y layout con Tailwind (grid, espaciado y estados hover).

## 6) Estructuras de datos usadas por componentes

- Los modelos (`profile`, `exercise`, `meal`) se manejan como objetos JavaScript.
- Se mantienen contratos estables por convención en componentes y estado global.

## 7) Estado global para consumo de componentes

- **Ruta:** `src/context/AppStateContext.jsx`
- **API del contexto:**
  - `profile: UserProfile`
  - `updateProfile: (nextProfile) => void`
- **Uso actual:**
  - `Header` consume `profile` para mostrar nombre.
  - `BaseModal + ProfileForm` permiten editar y guardar.

## 8) Pantallas refactorizadas con composicion

- `DaySelection`:
  - usa `PageHeader` + `FeatureCard`.
- `WorkoutView`:
  - usa `PageHeader` + `DataListCard`.
- `DietView`:
  - usa `PageHeader` con datos de comidas en arreglos de objetos.

## 9) Convenciones para nuevos componentes

- Definir contratos de props claros desde el componente.
- Mantener estructuras de datos consistentes entre estado y vistas.
- Priorizar composicion (`children`, `render props`) sobre variantes rigidas.
- Mantener clases Tailwind legibles y coherentes con tema oscuro de GOFIT.
