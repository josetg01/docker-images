# Usa la imagen base de Alpine
FROM alpine:3.18

LABEL maintainer="j.m.torregros@gmail.com"

# Instalar MySQL (MariaDB) desde el repositorio de Alpine
RUN apk update && apk add --no-cache mysql mysql-client

# Crear un directorio para los datos de MySQL
RUN mkdir /var/lib/mysql

# Exponer el puerto 3306 para MySQL
EXPOSE 3306

# Iniciar MySQL con una base de datos vacía
CMD ["mysqld_safe"]
