#!/bin/sh

# Establecer valor por defecto para MYSQL_ROOT_PASSWD si no está definido
if [ -z "$MYSQL_ROOT_PASSWD" ]; then
  MYSQL_ROOT_PASSWD="root"
fi

