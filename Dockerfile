FROM node:alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --no-optional
COPY . .
EXPOSE 4000
CMD ["node", "bin/www"]
