## Plataformas Web P56 - Aplicación para el clima

Aplicación en NodeJS que permite consultar la temperatura, presión atmosférica y humedad de una determinada ciudad

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

 * **Git** .- https://git-scm.com<br/><br/>
 * **Node.js** .- https://nodejs.org. Tenga en cuenta que la versión debe ser igual o superior a la versión 8.<br/><br/>
 * **Npm** .- Administrador de paquetes Node.js, viene con Node.js. Asegúrese de que la versión npm sea igual o superior a la versión 5.
<br/>

### Instalación 🔧

_Cuando haya completado la configuración de herramientas, debe descargar el código de la aplicación. La forma más fácil de hacerlo es clonar el repositorio de GitHub:_

```
git clone https://github.com/karlaVane/app-del-clima.git
```

_Una vez completado la clonación, se debe instalar los módulos npm_

```
cd app-del-clima && npm install --save
```

**Ejemplos:**
Para consultar la temperatura de Quito
```
node app -c quito 
```
Para consultar la temperatura de Quito y su presión atmosférica
```
node app -c quito -o p
```
Para consultar la temperatura de Quito y su humedad
```
node app -c quito -o h
```
