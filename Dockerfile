FROM ghcr.io/octobercms/runtime-prod:php85

COPY . /var/www/html

RUN composer install \
  --no-dev \
  --no-interaction \
  --prefer-dist \
  --optimize-autoloader
