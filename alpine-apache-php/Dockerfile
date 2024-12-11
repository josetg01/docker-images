FROM alpine

# Añadir información del mantenedor
LABEL maintainer="j.m.torregros@gmail.com"

# Instalar Apache y PHP con las extensiones necesarias
RUN apk update && \
    apk add --no-cache apache2 \
            php84 \
            php84-mysqli \
            php84-apache2

RUN mkdir /var/www/htdocs

# Crear un archivo PHP para probar phpinfo()
RUN echo "<?php phpinfo(); ?>" > /var/www/htdocs/phpinfo.php

# Cambiar la configuración de Apache para usar /var/www/htdocs como DocumentRoot
RUN sed -i 's|DocumentRoot "/var/www/localhost/htdocs"|DocumentRoot "/var/www/htdocs"|' /etc/apache2/httpd.conf && \
    sed -i 's|DocumentRoot "/var/www/localhost/htdocs"|DocumentRoot "/var/www/htdocs"|' /etc/apache2/conf.d/ssl.conf
    
# Copiar el script de entrada al contenedor
COPY entrypoint.sh /entrypoint.sh

# Hacer que el script de entrada sea ejecutable
RUN chmod +x /entrypoint.sh

# Configurar el script de entrada como el ENTRYPOINT
ENTRYPOINT ["/entrypoint.sh"]
