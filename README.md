# Nombre del proyecto
Repositorio del backend para Desarrollo Web 3
### Herramientas y frameworks
- Node.js (versión 20.17.0) - Incluido en el ```dockerfile```
	- Express.js (versión 4.21.0)
		- JavaScript (ECMAScript 2023)
- Docker (versión 27.2.0) - **Obligatorio**
## Levantar el proyecto localmente usando Docker

- El primer paso es clonar el repositorio de GitHub (Mediante la URL: https://github.com/CookieMaster2/backend-web3.git o usando SSH: git@github.com:CookieMaster2/backend-web3.git)
	- Utilizando el comando ```git clone``` en la consola de comandos seguido del método de clonado (URL o SSH) en cualquier directorio de su equipo de cómputo.
- Una vez levantado el proyecto, se debe de localizar el archivo llamado ```dockerfile``` 
- En la misma localización del ```dockerfile``` ejecutar los siguientes comandos para levantar con contenedor de forma local:
	- ```docker build -t express-app .```: Este comando prepara el container con las especificaciones del ```dockerfile```, el segmento ```-t express-app``` le coloca una etiqueta al proyecto para identificarlo, mientras que ```.``` hace referencia al documento actual del ```dockerfile```.
	- ```docker run -p 3000:3000 express-app```: Este comando abre los puertos especificados para que pueda correr la aplicación, el segmento ```-p 3000:3000``` hace referencia a los puertos locales para ejecutar la aplicación, seguido del nombre asignado anteriormente.
- Para detener la ejecución del contenedor, se utilizan los siguientes comandos:
	- ```docker ps```: Este comando enlista todos los contenedores activos dentro del sistema.
	- ```docker stop <container-id>```: Una vez identificado el contenedor que se desea detener, se usa este comando, el apartado de ```<container-id>```deberá de incluir el identificador del contenedor que se desea detener.
## Levantar el proyecto usando Docker Compose

- Asumiendo que los archivos han sido ubicados adecuadamente en el entorno local, se tiene que identificar el documento ```docker-compose.yaml```, este documento especifica la configuración del entorno de ejecución de la aplicación.
- Para levantar el proyecto usando Docker Compose, se utilizan los siguientes comandos:
	- ```docker-compose up```: Este comando levanta un contenedor de Docker Compose que se visualiza en tiempo real.
	- ```docker-compose down```: Este comando finaliza la ejecución del contenedor levantado anteriormente.
## ¿Cuál debo de utilizar?

De forma resumida, las diferencias entre Docker y Docker Compose son mínimas; mientras que el primero se centra en la creación y ejecución de contenedores de forma individual y manual, el segundo tiene como propósito levantar múltiples contenedores para observar más adecuadamente la interacción entre los distintos componentes a evaluar.
## Estructura del repositorio*
- backend-web3/
	- app/
		- index.js
	- .env
	- .gitignore
	- Dockerfile
	- package.json
	- README.md

> \* - La estructura de carpetas y archivos se irá actualizando conforme el proyecto avance

###### Integrantes: 

- Daniel García
- Alejandro Rihani
- Ángel Herrera
- Ángel Vela
- Johan Melchor

