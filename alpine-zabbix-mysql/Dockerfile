FROM alpine
LABEL maintainer="j.m.torregros@gmail.com"
RUN apk update && \
    apk add --no-cache zabbix \
                        zabbix-agent \
                        apache2 \
                        apache-mod-fcgid \
                        php84 \
                        php84-cgi
