#!/bin/bash
# Script para iniciar Oracle Database XE

# Verifica si la variable de entorno ORACLE_PWD está establecida
if [ -z "$ORACLE_PWD" ]; then
  echo "ERROR: La variable de entorno ORACLE_PWD no está establecida."
  exit 1
fi

# Configura la base de datos si no está configurada
if [ ! -d $ORACLE_HOME/dbs ]; then
  echo "Configurando la base de datos..."
  /etc/init.d/oracle-xe-21c configure <<EOF
$ORACLE_PWD
$ORACLE_PWD
EOF
fi

# Inicia Oracle Database
echo "Iniciando Oracle Database..."
/etc/init.d/oracle-xe-21c start

# Mantiene el contenedor en ejecución
tail -f /opt/oracle/diag/rdbms/*/*/trace/alert*.log
