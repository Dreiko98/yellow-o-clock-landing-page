# 📁 Ubicación exacta de Assets para Yellow o'clock

## Estructura de carpetas del proyecto:
```
pdf_remarker landing page/
├── public/                    ← TODOS los assets van aquí
│   ├── favicon.ico           ← Asset 1: Favicon
│   ├── logo.svg              ← Asset 2: Logo completo  
│   ├── demo.gif              ← Asset 3: GIF demostrativo (MÁS IMPORTANTE)
│   └── demo.pdf              ← Asset 4: PDF de ejemplo
├── app/
├── components/
└── ...
```

## 📋 Lista detallada de assets necesarios:

### 1. **favicon.ico**
- **📍 Ubicación exacta:** `public/favicon.ico`
- **📏 Especificaciones:** 
  - Formato: `.ico`
  - Tamaños: 16x16px y 32x32px en un solo archivo
  - Contenido: Icono del reloj amarillo de Yellow o'clock
- **💡 Cómo crear:** 
  - Usar favicon.io o realfavicongenerator.net
  - Subir una imagen PNG del icono y generar el .ico

---

### 2. **logo.svg**
- **📍 Ubicación exacta:** `public/logo.svg`
- **📏 Especificaciones:**
  - Formato: `.svg` (vectorial)
  - Contenido: Icono del reloj + texto "Yellow o'clock"
  - Colores: #F7C700 (amarillo) y #174E8C (azul)
  - Dimensiones: Escalable, optimizado para header (~300x60px orientativo)

---

### 3. **demo.gif** ⭐ **¡EL MÁS IMPORTANTE!**
- **📍 Ubicación exacta:** `public/demo.gif`
- **📏 Especificaciones:**
  - Formato: `.gif` optimizado para web
  - Dimensiones: **800x450px** (ratio 16:9)
  - Peso: **≤ 4MB** máximo
  - Duración: 3-5 segundos en loop
  - **Contenido sugerido:**
    - PDF de resultados de natación abierto
    - Yellow o'clock subrayando automáticamente nadadores
    - Antes/después del proceso
    - Transición suave y profesional

---

### 4. **demo.pdf**
- **📍 Ubicación exacta:** `public/demo.pdf`
- **📏 Especificaciones:**
  - Formato: `.pdf`
  - Contenido: PDF real de resultados de natación (anonimizado)
  - Peso: ≤ 2MB
  - Uso: Para que usuarios descarguen y prueben

---

## 🔄 Cómo añadir los archivos:

1. **Navegar a la carpeta:**
   ```
   C:\Users\GERMAN\OneDrive - UPV\ASUNTOS INTERNOS\Dreiko98 Stuff\cnm scripts\pdf_remarker landing page\public\
   ```

2. **Copiar tus archivos directamente en esa carpeta**

3. **Verificar que los nombres sean exactos:**
   - ✅ `favicon.ico` (no `favicon.png` ni otro)
   - ✅ `logo.svg` (no `logo.png` ni otro)
   - ✅ `demo.gif` (no `demo.mp4` ni otro)
   - ✅ `demo.pdf` (no `demo.PDF` ni otro)

4. **Refrescar la página** en http://localhost:3000

---

## 🎯 Prioridad de creación:

1. **🔥 ALTA:** `demo.gif` - Es lo que más impacto visual tendrá
2. **📝 MEDIA:** `logo.svg` - Para el branding profesional
3. **🔸 MEDIA:** `favicon.ico` - Para la identidad del sitio
4. **📄 BAJA:** `demo.pdf` - Nice to have para descargas

---

## ✅ Estado actual:
- **Placeholders creados:** ✅ (la página funciona sin los assets reales)
- **Código preparado:** ✅ (lee automáticamente de /public/)
- **Paths configurados:** ✅ (todo apunta a las ubicaciones correctas)

**¡Una vez coloques los archivos en /public/, aparecerán automáticamente en la web!**
