# 🎲 Quiniela Scraper - Resultados de Loterías Argentinas

Una aplicación web moderna que obtiene y muestra los resultados de las quinielas argentinas, Quini 6 y Telekino en tiempo real.

## ✨ Características

- **Web Scraping Automático**: Obtiene resultados de quinielas nacionales, Mendoza, Quini 6 y Telekino
- **Actualización en Tiempo Real**: Los resultados se actualizan automáticamente cada 30 minutos
- **Interfaz Moderna**: Diseño responsive y amigable para todos los usuarios
- **API REST**: Endpoints para acceder a los datos programáticamente
- **Actualización Manual**: Botón para forzar la actualización de resultados
- **🎯 Optimizado para TV**: Diseño específico para pantallas de televisión en agencias
- **📺 Modo Pantalla Completa**: Funcionalidad completa para uso comercial
- **🔄 Rotación Automática**: Cambio automático entre diferentes vistas cada 30 segundos
- **⚡ Uso 24/7**: Optimizado para funcionamiento continuo sin intervención

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd quiniela-scraper
   ```

2. **Instalar dependencias del backend**
   ```bash
   npm install
   ```

3. **Instalar dependencias del frontend**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Configurar variables de entorno (opcional)**
   ```bash
   cp .env.example .env
   ```
   Edita el archivo `.env` si necesitas cambiar el puerto o otras configuraciones.

## 🏃‍♂️ Ejecución

### Modo Desarrollo

1. **Iniciar el servidor backend**
   ```bash
   npm run dev
   ```

2. **En otra terminal, iniciar el frontend**
   ```bash
   cd client
   npm start
   ```

3. **Abrir en el navegador**
   - Frontend: http://localhost:3000
   - API: http://localhost:5000

### Modo Producción

1. **Construir el frontend**
   ```bash
   npm run build
   ```

2. **Iniciar el servidor**
   ```bash
   npm start
   ```

3. **Abrir en el navegador**
   - Aplicación: http://localhost:5000

## 📡 API Endpoints

### Obtener todos los resultados
```
GET /api/resultados
```

### Obtener resultados específicos
```
GET /api/quiniela-nacional
GET /api/quiniela-mendoza
GET /api/quini6
GET /api/telekino
```

### Forzar actualización
```
POST /api/actualizar
```

## 🎨 Características del Frontend

- **Diseño Responsive**: Se adapta a dispositivos móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Colores Diferenciados**: Cada tipo de lotería tiene su propio esquema de colores
- **Actualización Visual**: Indicadores de carga y estado de actualización
- **Interfaz Intuitiva**: Fácil de usar para todos los usuarios
- **📺 Optimizado para TV**: Fuentes y elementos escalados para pantallas grandes
- **🔄 Rotación Automática**: Cambio automático entre vistas para mejor visibilidad
- **⚡ Modo Kiosco**: Ideal para uso comercial en agencias de quinielas

## 🔧 Tecnologías Utilizadas

### Backend
- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web
- **Cheerio**: Parser HTML/XML para web scraping
- **Axios**: Cliente HTTP
- **Node-cron**: Programador de tareas

### Frontend
- **React**: Biblioteca de interfaz de usuario
- **CSS3**: Estilos modernos con gradientes y animaciones
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🚀 Despliegue

### Heroku
1. Crear una aplicación en Heroku
2. Conectar con tu repositorio
3. El build se ejecutará automáticamente

### Vercel/Netlify
1. Conectar el repositorio
2. Configurar el build command: `npm run build`
3. Configurar el output directory: `client/build`

## ⚠️ Aviso Legal

Esta aplicación es solo para fines informativos. Los resultados mostrados no son oficiales y deben verificarse con las fuentes oficiales de cada lotería. El uso de esta aplicación es bajo tu propia responsabilidad.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si encuentras algún problema o tienes sugerencias, por favor abre un issue en el repositorio.

## 📺 Uso en Agencias de Quinielas

Esta aplicación está especialmente optimizada para su uso en agencias de quinielas con televisores. Incluye:

### Características para TV
- **Fuentes grandes**: Optimizadas para lectura a distancia
- **Pantalla completa**: Modo kiosco para uso comercial
- **Rotación automática**: Cambio entre vistas cada 30 segundos
- **Indicadores de estado**: "EN VIVO" y progreso de actualización
- **Controles intuitivos**: Botones grandes y fáciles de usar

### Configuración Rápida para TV
1. Abrir la aplicación en el navegador
2. Activar pantalla completa (botón ⤢ o F11)
3. Activar rotación automática (botón 🔄)
4. Configurar el sistema para no apagar la pantalla
5. ¡Listo para funcionar 24/7!

Para instrucciones detalladas, consulta el archivo `INSTRUCCIONES_TV.md`.

---

**¡Disfruta consultando los resultados de las loterías argentinas! 🍀**

**Perfecto para agencias de quinielas que necesitan mostrar resultados en tiempo real en sus televisores.**
