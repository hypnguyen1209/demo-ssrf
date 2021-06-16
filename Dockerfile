FROM node:14.17-alpine

WORKDIR /app

COPY . . 

RUN npm install

EXPOSE 9900

CMD ["npm", "start"]