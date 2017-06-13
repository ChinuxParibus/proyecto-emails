# proyecto-emails
Mini scraper que transforma datos de email.

## Contenido del proyecto.

Utilizando nodejs, armar una aplicación de consola que se encargue de procesar emails (que contienen campos de formularios en diferentes formatos), y extraer la información de contacto de cada cliente que existe dentro del contenido del email.

El archivo adjunto contiene un array de 3 objetos javascript, que cada uno contiene toda la información de c/email que se recibe (from, to, subject, body). En base al subject de cada objeto email (existén 3 subjects diferentes), se tiene que definir un parser que procese cada uno de estos 3 tipos de email.
El parser es el responsable de conocer la estructura de ese tipo de email, y extraer la información básica del cliente desde el body del email.

Luego de que el parser correspondiente procese cada email, se debe imprimir en consola, la siguiente información por cada email:
- Nombre del Cliente
- Email del Cliente
- Telefono del Cliente

Archivo adjunto: ejercicioEmails.js
Archivo solución: index.js

## Modo de ejecución.

Requiere Node.js versión 6 o superior instalado.

1. Clonar el proyecto
2. En consola, en el directorio clonado, ejecutar: `node index.js`
3. Los resultados serán mostrados como array de Javascript directamente.

*Sujeto a modificaciones*.
