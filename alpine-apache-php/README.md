# APACHE2 Y PHP8.4 EN DOCKER
## Construir la imagen
```
sudo docker build -t apache-php .
```
## ARRANCAR CONTENEDOR
```
sudo docker run -d --name apache-php -v /var/www/htdocs:/var/www/htdocs -e PHP_LIMIT_MEMORY=256M -p 80:80 apache-php 
```
## ARRANCAR CONTENEDOR CON DOCKER-COMPOSE
```
sudo docker compose up -d
```
## Variables De Entorno
| Variable | Opciones | Opcional | Por defecto |
|-|-|-|-|
| PHP_LIMIT_MEMORY | 128M, 256M, 512M... | Si |128M|
| DISPLAY_ERRORS| true, false | Si | false |
|TZ|Multiples|Si|UTC|

Puede consultar las Zonas de tiempo(TZ) en el siguiente enlace: [Clic Aqui](https://www.php.net/manual/en/timezones.php)
