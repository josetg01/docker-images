# Utiliza la imagen base de Alpine Linux
FROM alpine:latest

# Instala Transmission y Clutch
RUN apk update && apk add --no-cache transmission-daemon

# Copia y configura el archivo settings.json
COPY settings.json /var/lib/transmission/config/settings.json

# Crea y cambia la propiedad de la carpeta de descargas
RUN mkdir -p /downloads/{Descargando,Completados} && chown -R transmission:transmission /downloads

# Cambiar directorio a /usr/share/transmission/public_html
WORKDIR /usr/share/transmission/public_html
RUN rm -R *
COPY transmissionic/ .

# Exponer puertos
EXPOSE 9091

# Comando de inicio para Transmission
CMD ["transmission-daemon", "--foreground", "--config-dir", "/var/lib/transmission/config"]
