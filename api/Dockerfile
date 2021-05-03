FROM node:alpine
WORKDIR /api
COPY package.json ./
RUN npm install --no-optional
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
