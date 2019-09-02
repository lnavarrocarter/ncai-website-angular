#Dockerfile para contenedor de nodejs y nestjs 
#Author: Luis Navarro Carter
#Contact : lnavarro.carter@ncai.cl

#From nos permite tener una imagen base para nuestro nuevo contenedor
FROM node:10.15.3-alpine

#instalamos Nest.Js
RUN npm i -g @nestjs/cli

#establece como directorio de trabajo nuestra carpeta 'my_nest_app'
WORKDIR /ncai

#exponemos el puerto 3100 que es el que usa nest para acceder a la app
EXPOSE 3100
CMD ["node", "main.js"]
