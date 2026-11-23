# El sitio en medio: git push medio main (ver medio.yaml).
FROM node:22-alpine AS build
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npx eleventy

FROM nginx:1.27-alpine
RUN sed -i 's/listen  *80;/listen 8080;/' /etc/nginx/conf.d/default.conf
COPY --from=build /src/_site /usr/share/nginx/html
EXPOSE 8080
