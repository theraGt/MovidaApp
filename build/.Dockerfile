FROM node:18

WORKDIR /ApiMovida

# Copia los archivos de configuración de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

COPY . .

EXPOSE 3030

CMD [ "npm","start" ]