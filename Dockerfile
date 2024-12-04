FROM nginx:alpine

LABEL Author lipn

COPY ./dist /usr/share/nginx/html