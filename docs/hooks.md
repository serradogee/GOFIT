# Guía de Hooks en GOFIT

En React moderno, los Hooks son la forma en que los componentes funcionales manejan estado, ciclo de vida y optimizaciones de rendimiento.

## 1. useState (Estado Local)
Se usa para guardar información que, cuando cambia, debe redibujar (re-renderizar) la pantalla.
*Ejemplo en un selector de peso:*
```tsx
import { useState } from 'react';

export const UserWeightInput = () => {
  const [weight, setWeight] = useState<number>(70);

  return (
    <div className="flex flex-col items-center">
      <p className="text-xl font-bold">Tu peso: {weight} kg</p>
      <div className="flex gap-4 mt-2">
        <button onClick={() => setWeight(w => w - 1)} className="btn-secondary">-</button>
        <button onClick={() => setWeight(w => w + 1)} className="btn-primary">+</button>
      </div>
    </div>
  );
}
```

## 2. useEffect (Efectos Secundarios)
Se ejecuta después de que el componente se renderiza. Ideal para hacer peticiones al backend, manipular el DOM o suscripciones.
*Ejemplo: Cambiar el título de la pestaña o hacer fetch al inicio:*
```tsx
import { useEffect } from 'react';

export const Dashboard = () => {
  useEffect(() => {
    document.title = "GOFIT | Tu Dashboard";
    
    // Función de limpieza (opcional) que corre al desmontar el componente
    return () => {
      document.title = "GOFIT";
    };
  }, []); // El array vacío [] indica que esto SOLO ocurre 1 vez al montarse
  
  return <h1>Cargando tus datos...</h1>;
}
```

## 3. useMemo (Memorización de Valores)
Guarda en caché (memoriza) el resultado de un cálculo pesado para no volver a ejecutarlo en cada render, a menos que cambien sus dependencias.
```tsx
import { useMemo } from 'react';

export const DietSummary = ({ meals }) => {
  // Solo suma las calorías si el array 'meals' cambia, ahorrando rendimiento
  const totalCalories = useMemo(() => {
    console.log("Calculando calorías...");
    return meals.reduce((acc, meal) => acc + meal.calories, 0);
  }, [meals]); 

  return <p>Total Diario: {totalCalories} kcal</p>;
}
```

## 4. useCallback (Memorización de Funciones)
Similar a `useMemo`, pero guarda una *función*. Evita que React cree una nueva referencia de la función en memoria en cada renderizado. Muy útil al pasar funciones a componentes hijos optimizados con `React.memo`.
```tsx
import { useCallback } from 'react';

export const WorkoutView = ({ routineId }) => {
  const handleCompleteWorkout = useCallback(() => {
    // Lógica para enviar al servidor que se terminó la rutina
    api.complete(routineId);
  }, [routineId]); // La función solo se recrea si cambia el routineId
}
```

---

## 5. Custom Hook: `useGenerator`
Los custom hooks (nombres que empiezan por "use") permiten extraer lógica reutilizable.
Este hook abstrae toda la lógica compleja de pedir una rutina o dieta al backend, exponiendo solo lo necesario al componente visual.

```tsx
import { useState } from 'react';

type GeneratorType = 'routine' | 'diet';

export const useGenerator = (type: GeneratorType) => {
  // Estados para manejar el flujo asíncrono
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generatePlan = async (userData: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const endpoint = type === 'routine' 
        ? '/api/v1/routines/generate' 
        : '/api/v1/diets/generate';
        
      // Petición al backend
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) throw new Error("Error al comunicarse con el servidor");
      
      const result = await response.json();
      setData(result.data); // Guardamos la respuesta exitosa
      
    } catch (err: any) {
      setError(err.message || "Ocurrió un error inesperado");
    } finally {
      setIsLoading(false); // Siempre detenemos el loading, haya éxito o error
    }
  };

  // Retornamos la función que dispara la acción y los estados actuales
  return { generatePlan, data, isLoading, error };
};
```
