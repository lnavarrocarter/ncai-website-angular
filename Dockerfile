FROM node:14 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install --force
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17.1-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# Copy the default nginx.conf provided by Ngix
# COPY nginx.conf /etc/nginx/nginx.conf
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf

