FROM ubuntu:22.04

#Install Apache2 And PHP
RUN apt update && \
    DEBIAN_FRONTEND=noninteractive \
    apt install -y \
    software-properties-common \
    add-apt-repository ppa:ondrej/php -y \
    apt install -y \
    apache2 \
    php8.2 \
    php8.2-mysqli \
    php8.2-gd \
    php8.2-common \
    php8.2-curl \
    php8.2-mbstring \
    php8.2-xml \
    php8.2-bcmath \
    php8.2-intl \
    php8.2-soap \
    php8.2-zip \
    unzip \
    && rm -rf /var/lib/apt/lists/*

#Download facturascripts and extract
RUN wget https://facturascripts.com/DownloadBuild/1/stable -O /tmp/facturascripts.zip && \
    unzip -d /tmp/ /tmp/facturascripts.zip && \
    cp -r /tmp/facturascripts/* /var/www/html/ && \
    chown www-data:www-data /var/www/html/ -R
    
