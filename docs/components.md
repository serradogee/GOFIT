# Catalogo de Componentes Reutilizables (GOFIT)

Este documento describe los componentes reutilizables creados, sus props tipadas y su uso dentro de la app.

## 1) `PageHeader`

- **Ruta:** `src/components/PageHeader.tsx`
- **Objetivo:** Unificar cabeceras de pantallas (`DietView`, `WorkoutView`, `DaySelection`).
- **Props (TypeScript):**
  - `title: string`
  - `subtitle?: string`
  - `accent?: ReactNode`
- **Composicion:** permite inyectar `accent` como nodo React para destacar texto o badges.

## 2) `FeatureCard`

- **Ruta:** `src/components/FeatureCard.tsx`
- **Objetivo:** Tarjeta accionable reutilizable para navegacion de modulos.
- **Props (TypeScript):**
  - `title: string`
  - `icon: ReactNode`
  - `watermark: string`
  - `onClick: () => void`
- **Uso actual:** `DaySelection` para opciones de `Ejercicio` y `Dieta`.
- **Estilos:** Tailwind + clase compartida `premium-card`.

## 3) `DataListCard<T>`

- **Ruta:** `src/components/DataListCard.tsx`
- **Objetivo:** Renderizar listas de entidades tipadas (ej. ejercicios) de forma configurable.
- **Props (TypeScript genericas):**
  - `items: T[]` con restriccion `T extends { id: string }`
  - `columns: ListColumn<T>[]`
  - `header: (item: T) => ReactNode`
  - `actions?: (item: T) => ReactNode`
- **Composicion:** el padre controla estructura visual de fila mediante `header` y `actions`.
- **Uso actual:** `WorkoutView`.

## 4) `BaseModal`

- **Ruta:** `src/components/BaseModal.tsx`
- **Objetivo:** Contenedor modal reutilizable para flujos de edicion o confirmacion.
- **Props (TypeScript):**
  - `isOpen: boolean`
  - `title: string`
  - `onClose: () => void`
  - `children: ReactNode`
- **Composicion:** renderiza cualquier contenido a traves de `children`.
- **Uso actual:** apertura de edicion de perfil desde `Header`.

## 5) `ProfileForm`

- **Ruta:** `src/components/ProfileForm.tsx`
- **Objetivo:** Formulario tipado para editar perfil desde estado global.
- **Props (TypeScript):**
  - `profile: UserProfile`
  - `onSubmit: (nextProfile: UserProfile) => void`
- **Fuente de datos:** `AppStateContext` (estado global cliente).
- **Estilos:** inputs y layout con Tailwind (grid, espaciado y estados hover).

## 6) Tipos de dominio usados por componentes

- **Ruta:** `src/types/domain.ts`
- **Tipos principales:**
  - `UserProfile`
  - `Exercise`
  - `Meal`
  - `Weekday`
- **Motivo:** evitar objetos anonimos y asegurar contratos consistentes entre estado global, vistas y futuros endpoints API.

## 7) Estado global para consumo de componentes

- **Ruta:** `src/context/AppStateContext.tsx`
- **API del contexto:**
  - `profile: UserProfile`
  - `updateProfile: (nextProfile: UserProfile) => void`
- **Uso actual:**
  - `Header` consume `profile` para mostrar nombre.
  - `BaseModal + ProfileForm` permiten editar y guardar.

## 8) Pantallas refactorizadas con composicion

- `DaySelection`:
  - usa `PageHeader` + `FeatureCard`.
- `WorkoutView`:
  - usa `PageHeader` + `DataListCard<Exercise>`.
- `DietView`:
  - usa `PageHeader` con datos tipados `Meal[]`.

## 9) Convenciones para nuevos componentes

- Definir siempre interfaz/tipo de props.
- Reusar tipos de `src/types/domain.ts` o crear tipos locales si son estrictamente de UI.
- Priorizar composicion (`children`, `render props`) sobre variantes rigidas.
- Mantener clases Tailwind legibles y coherentes con tema oscuro de GOFIT.
