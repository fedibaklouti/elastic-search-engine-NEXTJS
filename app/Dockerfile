# Stage 1: Builder
FROM node:18-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g next

RUN npx npx create-elasticsearch-dataset --dataset=books && npx create-elasticsearch-dataset --dataset=movies

EXPOSE 3000
CMD ["next", "start", "-p", "3000"]