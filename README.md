## 📦 Construcción y despliegue con Docker

Para crear la imagen de la aplicación, abro una terminal en la carpeta donde está el Dockerfile y ejecuto docker build -t alexander553/nacato_freddy_imc .. Luego cargo la imagen y creo un contenedor con docker run -d -p 8080:80 --name imc-app alexander553/nacato_freddy_imc, que levanta la app en el puerto 8080. Para subir la imagen a Docker Hub, primero inicio sesión con docker login y finalmente la subo usando docker push alexander553/nacato_freddy_imc.
#   E x a m e n 2 P _ W E B 
 
 