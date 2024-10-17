# Oracle XE 21c

Esta es una preparacion para hacer funcionar a Oracle Database Express Edition bajo un contenedor docker.

## Desplegar el contenedor docker
Para desplegarlo usamos el siguiente comando:

```
sudo docker run -d -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=<tu_contraseña> josetg01/oracle-xe:latest
```

Cambiamos <tu_contraseña> por la contraseña que quieras que tenga los usuarios por defecto sys y system.

## Construccion de la imagen
Para construir la imagen usamos el siguiente comando:
```
sudo docker build -t oracle-xe-21c .
```

Tras esto para ejecutar el contenedor con la imagen creada se ejecuta el siguiente comando:
```
sudo docker run -d -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=<tu_contraseña> oracle-xe-21c
```
Cambiamos <tu_contraseña> por la contraseña que quieras que tenga los usuarios por defecto SYS y SYSTEM.
