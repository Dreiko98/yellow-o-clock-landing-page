# Yellow o'clock Landing Page

Página de aterrizaje para la aplicación Yellow o'clock - una herramienta de escritorio que resalta automáticamente clubes deportivos en PDFs de resultados de natación.

## 🚀 Características

- **Next.js 13** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Responsive design** optimizado para todos los dispositivos
- **Integración con Stripe** (mockup en Fase A)

## 📦 Estructura del proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal con configuración de fuentes
│   ├── page.tsx            # Página de inicio
│   ├── success/page.tsx    # Página de éxito post-compra
│   └── cancel/page.tsx     # Página de cancelación
├── components/
│   ├── Hero.tsx            # Sección hero con CTA principal
│   ├── Demo.tsx            # Demostración animada
│   ├── Features.tsx        # Grid de características
│   ├── Pricing.tsx         # Pricing con tarjeta centrada
│   ├── FAQ.tsx             # Preguntas frecuentes
│   ├── Footer.tsx          # Footer con enlaces legales
│   └── BuyButton.tsx       # Botón de compra reutilizable
├── pages/api/
│   └── checkout.ts         # API route para checkout (mockup)
└── public/
    ├── logo.svg            # Logo horizontal
    ├── demo.gif            # Demo animada (placeholder)
    └── favicon.ico         # Favicon
```

## 🎨 Paleta de colores

- **Primario**: `#F7C700` (Amarillo)
- **Secundario**: `#174E8C` (Azul)
- **Acento**: `#EF4B3E` (Rojo)
- **Fondo**: `#F9FAFB` (Gris claro)
- **Texto**: `#1E1E1E` (Negro)

## 🛠 Desarrollo

### Prerrequisitos

**⚠️ IMPORTANTE: Debes instalar Node.js primero**
- **Node.js 18+** - [Descargar desde nodejs.org](https://nodejs.org/)
- **npm** (incluido con Node.js)

### 📥 Instalación paso a paso

1. **Instalar Node.js:**
   - Ve a https://nodejs.org/
   - Descarga la versión LTS (recomendada)
   - Ejecuta el instalador `.msi` en Windows
   - Reinicia la terminal/PowerShell

2. **Verificar instalación:**
   ```bash
   node --version  # Debe mostrar v18.x.x o superior
   npm --version   # Debe mostrar la versión de npm
   ```

3. **Instalar dependencias del proyecto:**
   ```bash
   npm install
   ```

4. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir en navegador:**
   - Ve a http://localhost:3000
   - ¡La página debería estar funcionando!

### 🎯 Estado actual del proyecto

**✅ Completo y funcionando:**
- Toda la estructura Next.js 13
- Todos los componentes UI implementados
- Diseño responsive completo
- Mock de Stripe funcionando
- Páginas Success/Cancel
- Accordion FAQ interactivo

**📱 Lo que verás al abrir localhost:3000:**
1. **Hero** - "Da color a tus resultados en PDF" + botón amarillo
2. **Demo** - Sección con placeholder para GIF
3. **Features** - Grid 3x2 con características
4. **Pricing** - Tarjeta de ??€ con beneficios
5. **FAQ** - 6 preguntas con acordeón funcional
6. **Footer** - Enlaces de contacto y legales

**🔘 Funcionalidad de prueba:**
- Botón "Comprar licencia" → redirige a /success
- FAQ se abre/cierra al hacer clic
- Todo es responsive (prueba en móvil)

**📦 Assets pendientes (opcional):**
- `favicon.ico` real (actualmente placeholder)
- `demo.gif` real (actualmente placeholder)
- `demo.pdf` para descarga

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

### Scripts disponibles

- `dev`: Inicia el servidor de desarrollo
- `build`: Compila la aplicación para producción
- `start`: Inicia el servidor de producción
- `lint`: Ejecuta el linter

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub con Vercel
2. Las variables de entorno se configurarán en la Fase B
3. Deploy automático en cada push

### Variables de entorno (Fase B)

```env
NEXT_PUBLIC_DOMAIN=https://yellowoclock.com
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
BACKEND_URL=https://backend-domain.com
```

## 📱 Responsive Design

- **Mobile first** approach
- Breakpoints: `sm` (≥640px), `md` (≥768px), `lg` (≥1024px)
- Grid adaptativo en características y FAQ
- CTAs optimizados para touch

## ♿ Accesibilidad

- Alto contraste en CTAs
- Navegación por teclado
- Textos alternativos en imágenes
- Respeta `prefers-reduced-motion`
- Límites de ancho para legibilidad

## 🔄 Fases de desarrollo

### Fase A (Actual)
- ✅ Estructura completa de la landing
- ✅ Diseño responsive
- ✅ Mockup de integración con Stripe
- ✅ API route `/api/checkout` que redirige a `/success`

### Fase B (Próxima)
- [ ] Integración real con Stripe
- [ ] Conexión con backend Flask
- [ ] Variables de entorno de producción
- [ ] Testing de flujo completo de compra

## 📊 Métricas objetivo

- **Lighthouse Score**: >90 en todas las métricas
- **Performance**: >90
- **Accessibility**: >90
- **Best Practices**: >90
- **SEO**: >90

## 📧 Contacto

Para soporte técnico: [soporte@yellowoclock.com](mailto:soporte@yellowoclock.com)
Para ventas: [ventas@yellowoclock.com](mailto:ventas@yellowoclock.com)

---

*Construido con ❤️ para la comunidad deportiva*
