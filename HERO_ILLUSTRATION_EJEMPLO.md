# Ejemplo de uso de HeroIllustration

## Integración en el Hero

El componente `HeroIllustration` ya está integrado en el `Hero.tsx` de la siguiente manera:

```tsx
import HeroIllustration from './HeroIllustration';

// En el Hero component:
<div className="hidden lg:block mt-16">
  <HeroIllustration className="relative max-w-4xl mx-auto" />
</div>
```

## Funcionalidades del componente

### 🎨 **Diseño Visual**
- **SVG inline responsivo** con viewBox optimizado para pantallas grandes
- **Colores de marca**: Usa la paleta `#F7C700` (amarillo), `#174E8C` (azul), `#EF4B3E` (rojo)
- **Tema natación**: Simula un PDF de resultados con series de natación real
- **Club destacado**: Muestra "CN Mediterráneo" como ejemplo de detección automática

### ⚡ **Animaciones con Framer Motion**
- **Subrayado progresivo**: Los nadadores del club se subrayan secuencialmente
- **Cursor flotante**: El icono de Yellow o'clock flota suavemente 
- **Partículas**: Efectos visuales que aparecen después del subrayado
- **Respeta `prefers-reduced-motion`**: Desactiva animaciones para usuarios que las prefieren reducidas

### 🔧 **Props del componente**
```tsx
interface HeroIllustrationProps {
  className?: string; // Clases CSS adicionales
}
```

### 📱 **Responsive**
- **Solo se muestra en pantallas `lg` y superiores** (se oculta en móvil/tablet)
- **Máximo ancho**: 4xl (896px) para no saturar la pantalla
- **Altura automática** que mantiene las proporciones

### ♿ **Accesibilidad**
- **Etiquetas ARIA**: `role="img"`, `aria-labelledby`, `aria-describedby`
- **Textos descriptivos**: Título y descripción para lectores de pantalla
- **Sin dependencias de color**: La información es comprensible sin color

## Ejemplo de integración personalizada

Si quisieras usar el componente en otra parte de la app:

```tsx
// En cualquier componente
import HeroIllustration from './components/HeroIllustration';

function MiSeccion() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2>Así funciona Yellow o'clock</h2>
        <HeroIllustration className="mt-8" />
      </div>
    </div>
  );
}
```

## Datos de ejemplo en la ilustración

El SVG muestra datos realistas de natación:
- **Serie**: "50m LIBRE MASCULINO" 
- **Nadadores del CN Mediterráneo**: García López, Martín Torres, Sánchez Pérez
- **Otros clubes**: Club Natación Valencia, Aqua Sports Club
- **Tiempos realistas**: Entre 24.56 y 25.67 segundos

## Performance

- **SVG optimizado**: Código inline, sin requests adicionales
- **Animaciones CSS**: Aceleradas por hardware cuando es posible
- **Lazy by default**: Al ser SVG inline, se renderiza solo cuando es visible
- **Tamaño pequeño**: ~8KB de código SVG sin comprimir
