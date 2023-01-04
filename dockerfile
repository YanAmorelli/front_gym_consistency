FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm install react-scripts@5.0.1 -g 

EXPOSE 80

CMD ["npm", "start"]
