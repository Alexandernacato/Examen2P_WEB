# Etapa 1: Construcción de la aplicación Angular
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Servidor Nginx para servir la app
FROM nginx:alpine


COPY --from=builder /app/dist/Nacato_Freddy_IMC/browser /usr/share/nginx/html

# Copia configuración de Nginx si la tienes personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Mantiene Nginx corriendo
CMD ["nginx", "-g", "daemon off;"]
