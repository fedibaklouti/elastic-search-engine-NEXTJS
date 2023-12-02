# Stage 1: Builder
FROM node:18-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g next

EXPOSE 80
CMD ["next", "start", "-p", "80"]