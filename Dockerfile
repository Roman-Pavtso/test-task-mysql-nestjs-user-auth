FROM node:20.10.0-alpine

WORKDIR /node_app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
