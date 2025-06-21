@echo off
echo Yellow o'clock Landing Page - Scripts de desarrollo
echo ========================================================
echo.

REM Configurar el PATH para incluir Node.js
set PATH=C:\Program Files\nodejs;%PATH%

echo 1. Servidor de desarrollo
echo 2. Build de produccion
echo 3. Verificar dependencias
echo 4. Lint (comprobar codigo)
echo.

set /p opcion="Selecciona una opcion (1-4): "

if "%opcion%"=="1" goto dev
if "%opcion%"=="2" goto build
if "%opcion%"=="3" goto deps
if "%opcion%"=="4" goto lint

:dev
echo Iniciando servidor de desarrollo...
npm run dev
goto end

:build
echo Compilando para produccion...
npm run build
goto end

:deps
echo Verificando dependencias...
npm list
goto end

:lint
echo Ejecutando linter...
npm run lint
goto end

:end
echo.
echo Presiona cualquier tecla para salir...
pause >nul
