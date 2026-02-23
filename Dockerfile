FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY build/ ./build/

EXPOSE 5050

CMD ["node", "build/index.js"]
