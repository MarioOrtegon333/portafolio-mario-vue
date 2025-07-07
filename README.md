# Vue Portafolio

Este proyecto es un portafolio profesional para un desarrollador de software, creado con Vue.js. A continuación se presentan las instrucciones para la instalación y uso del proyecto.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
vue-portafolio
├── public
│   └── index.html          # Plantilla HTML principal
├── src
│   ├── assets              # Recursos estáticos (imágenes, fuentes, estilos)
│   ├── components          # Componentes de la aplicación
│   │   ├── About.vue       # Sección "Acerca de mí"
│   │   ├── CompanyCarousel.vue # Carrusel de empresas
│   │   ├── CompanyDetail.vue   # Detalles de una empresa
│   │   ├── Footer.vue      # Pie de página
│   │   ├── Header.vue      # Cabecera de la aplicación
│   │   ├── Hero.vue        # Sección destacada
│   │   ├── Skills.vue      # Habilidades técnicas
│   │   └── SoftSkills.vue   # Habilidades blandas
│   ├── views               # Vistas de la aplicación
│   │   ├── Home.vue        # Vista principal
│   │   └── Experience.vue   # Vista de experiencia
│   ├── App.vue             # Componente raíz
│   ├── main.js             # Punto de entrada de la aplicación
│   └── types               # Definiciones de tipos
│       └── index.ts        # Tipos e interfaces
├── package.json            # Configuración del proyecto para npm
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd vue-portafolio
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar el servidor de desarrollo:
```
npm run serve
```

Para construir el proyecto para producción:
```
npm run build
```

Para ejecutar el servidor de producción:
```
npm start
```

## Deployment en Render

Este proyecto está configurado para ser desplegado en Render. Para desplegar:

1. Sube tu código a un repositorio de GitHub
2. Conecta tu repositorio a Render
3. Configura el servicio como Web Service
4. Render automáticamente:
   - Ejecutará `npm install`
   - Ejecutará `npm run build`
   - Iniciará el servidor con `npm start`

### Configuración en Render:
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Node Version**: 18.x o superior

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:
```
npm run serve
```

Esto abrirá la aplicación en tu navegador en `http://localhost:8080`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.