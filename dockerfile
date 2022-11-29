FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm install react-scripts@5.0.1 -g 

CMD ["npm", "start"]
