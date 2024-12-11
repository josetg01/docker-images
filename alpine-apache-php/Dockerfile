FROM alpine
LABEL maintainer="j.m.torregros@gmail.com"

# Instalar Apache y PHP con las extensiones necesarias
RUN apk update && \
    apk add --no-cache apache2 \
            php84 \
            php84-mysqli \
            php84-apache2

# Copiar el script de entrada al contenedor
COPY entrypoint.sh /entrypoint.sh

# Hacer que el script de entrada sea ejecutable
RUN chmod +x /entrypoint.sh

# Configurar el script de entrada como el ENTRYPOINT
ENTRYPOINT ["/entrypoint.sh"]
