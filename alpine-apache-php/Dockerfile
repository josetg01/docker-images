FROM alpine
RUN apk update && \
    apk add --no-cache apache2 \
            php84 \
            php84-mysqli \
            php84-apache2

CMD [ "httpd", "-D", "FOREGROUND" ]
