#
## Construir la imagen
´´´
sudo docker build -t apache-php .
´´´
## Variables
| Variable | Opciones | Opcional | Por defecto |
|-|-|-|-|
| MEMORY_LIMIT | 128M, 256M, 512M... | Si |128M|
| DISPLAY_ERRORS| true, false | Si | false |
