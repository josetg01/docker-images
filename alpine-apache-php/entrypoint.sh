#!/bin/sh

# Establecer valor por defecto para DISPLAY_ERRORS si no está definido
DISPLAY_ERRORS="${DISPLAY_ERRORS:-false}"

# Configurar display_errors en php.ini si el archivo existe
if [ -f /etc/php84/php.ini ]; then
  if [ "$DISPLAY_ERRORS" = "true" ]; then
    echo "Configurando display_errors a On en php.ini"
    sed -i 's/display_errors = .*/display_errors = On/' /etc/php84/php.ini
  else
    echo "Configurando display_errors a Off en php.ini"
    sed -i 's/display_errors = .*/display_errors = Off/' /etc/php84/php.ini
  fi
else
  echo "Advertencia: /etc/php84/php.ini no encontrado"
fi

# Establecer valor por defecto para PHP LIMIT MEMORY si no está definido
PHP_LIMIT_MEMORY="${PHP_LIMIT_MEMORY:-128M}"

echo "Configurando memory_limit a $PHP_LIMIT_MEMORY en php.ini"
sed -i "s/memory_limit = .*/memory_limit = $PHP_LIMIT_MEMORY/" /etc/php84/php.ini

# Establecer valor por defecto para TimeZone si no está definido
TZ="${TZ:-UTC}"

echo "Configurando TimeZone a $TZ en php.ini"
sed -i "s/;date.timezone = .*/date.timezone = \"$TZ\"/" /etc/php84/php.ini

# Verificar si la zona horaria existe antes de copiarla
if [ -f "/usr/share/zoneinfo/$TZ" ]; then
  cp "/usr/share/zoneinfo/$TZ" /etc/localtime
else
  echo "Advertencia: Zona horaria $TZ no encontrada en /usr/share/zoneinfo/"
fi

# Ejecutar Apache en primer plano
exec httpd -D FOREGROUND
