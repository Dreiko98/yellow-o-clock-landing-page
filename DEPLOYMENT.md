# Deployment Guide - Yellow o'clock Landing Page

## 📋 Pre-deployment Checklist

### Archivos requeridos para producción:
- [ ] **Favicon real** (`public/favicon.ico`) - reemplazar placeholder
- [ ] **Logo SVG** (`public/logo.svg`) - optimizar si es necesario
- [ ] **Demo GIF** (`public/demo.gif`) - máximo 4MB, 800×450px
- [ ] **PDF demo** (`public/demo.pdf`) - ejemplo de resultados

### Configuración:
- [ ] Verificar todas las rutas funcionan
- [ ] Comprobar responsive en móviles
- [ ] Validar accesibilidad (contraste, navegación)
- [ ] Test del flujo completo de "compra" (mockup)

## 🚀 Vercel Deployment

### Paso 1: Preparación
```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# En el directorio del proyecto
npm run build
```

### Paso 2: Deploy
1. Conectar repositorio GitHub con Vercel
2. Configurar estas settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: npm run build
   - **Output Directory**: .next

### Paso 3: Variables de entorno (Fase B)
```env
NEXT_PUBLIC_DOMAIN=https://yellowoclock.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
BACKEND_URL=https://api.yellowoclock.com
```

## 🔧 Domain Configuration

### Custom Domain Setup:
1. Añadir dominio en Vercel dashboard
2. Configurar DNS records:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### SSL:
- Automático con Vercel
- Verificar HTTPS redirect funciona

## 📊 Performance Optimization

### Images:
- Convertir demo.gif a formato optimizado
- Usar Next.js Image component si es necesario
- Comprimir assets en `/public`

### Lighthouse Targets:
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

## 🧪 Testing Checklist

### Funcionalidad:
- [ ] Landing page carga correctamente
- [ ] Botón "Comprar licencia" redirige a /success
- [ ] Páginas /success y /cancel funcionan
- [ ] Enlaces de contacto (mailto) funcionan
- [ ] Responsive en móvil, tablet, desktop

### SEO:
- [ ] Meta tags configurados
- [ ] Títulos únicos por página
- [ ] Descripción meta relevante
- [ ] Robots.txt si es necesario

### Analytics (futuro):
- [ ] Google Analytics
- [ ] Conversion tracking
- [ ] Heat mapping (opcional)

## 🔄 Continuous Deployment

### Auto-deploy desde GitHub:
- Cada push a `main` deploya automáticamente
- Preview deployments para PR
- Rollback fácil en caso de problemas

### Branches strategy:
```
main     → Production (yellowoclock.com)
develop  → Preview (preview-url.vercel.app)
feature/* → Feature previews
```

## 📱 Mobile Testing

### Dispositivos objetivo:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop (Chrome, Firefox, Safari, Edge)

### Checks específicos:
- [ ] Botones fáciles de presionar (44px mínimo)
- [ ] Texto legible sin zoom
- [ ] Formularios funcionan bien
- [ ] Performance en 3G

## 🆘 Troubleshooting

### Errores comunes:
1. **404 en assets**: Verificar rutas en `/public`
2. **CSS no carga**: Comprobar Tailwind build
3. **API route falla**: Verificar `/pages/api` estructura
4. **Build error**: Comprobar TypeScript errors

### Logs útiles:
```bash
# Ver logs de build
vercel logs [deployment-url]

# Debug local
npm run build
npm start
```

---

## 🎯 Post-Launch Todo

### Fase B - Stripe Integration:
- [ ] Configurar Stripe webhook endpoints
- [ ] Implementar descarga automática post-compra
- [ ] Sistema de licencias
- [ ] Email confirmación compra

### Marketing:
- [ ] Analytics setup
- [ ] SEO optimization
- [ ] Social media meta tags
- [ ] Newsletter integration

### Maintenance:
- [ ] Monitor uptime
- [ ] Regular security updates
- [ ] Performance monitoring
- [ ] User feedback collection
