# Utiliza la imagen base oficial de Oracle Linux
FROM oraclelinux:7-slim

# Variables de entorno para la instalación de Oracle
ENV ORACLE_HOME=/opt/oracle/product/21c/dbhomeXE \
    ORACLE_SID=XE \
    PATH=$PATH:/opt/oracle/product/21c/dbhomeXE/bin:/opt/oracle/product/21c/dbhomeXE/OPatch \
    INSTALL_DIR=/opt/install \
    RUN_FILE=oracle-database-xe-21c-1.0-1.ol7.x86_64.rpm

# Crea el directorio de instalación y descarga el archivo RPM
RUN mkdir -p $INSTALL_DIR && \
    yum -y install oracle-database-preinstall-21c wget && \
    cd $INSTALL_DIR && \
    wget https://download.oracle.com/otn-pub/otn_software/db-express/$RUN_FILE

# Instala Oracle Database XE 21c
RUN yum -y localinstall $INSTALL_DIR/$RUN_FILE && \
    rm -rf $INSTALL_DIR && \
    yum -y clean all

# Exponemos el puerto 1521 para Oracle Database y el 5500 para Oracle EM Express
EXPOSE 1521 5500

# Script de inicio
COPY runOracle.sh /opt/oracle/

# Otorga permisos de ejecución al script
RUN chmod +x /opt/oracle/runOracle.sh

# Establece el comando para iniciar Oracle Database
CMD ["/opt/oracle/runOracle.sh"]
