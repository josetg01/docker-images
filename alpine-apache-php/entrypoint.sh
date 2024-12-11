#!/bin/sh

# Establecer valor por defecto para DISPLAY_ERRORS si no está definido
if [ -z "$DISPLAY_ERRORS" ]; then
  DISPLAY_ERRORS="false"
fi

# Configurar display_errors en php.ini
if [ "$DISPLAY_ERRORS" = "true" ]; then
  echo "Configurando display_errors a On en php.ini"
  sed -i 's/display_errors = .*/display_errors = On/' /etc/php84/php.ini
else
  echo "Configurando display_errors a Off en php.ini"
  sed -i 's/display_errors = .*/display_errors = Off/' /etc/php84/php.ini
fi

# Establecer valor por defecto para PHP LIMIT MEMORY si no está definido
if [ -z "$PHP_LIMIT_MEMORY" ]; then
  PHP_LIMIT_MEMORY="128M"
fi

# Ejecutar Apache en primer plano
httpd -D FOREGROUND
