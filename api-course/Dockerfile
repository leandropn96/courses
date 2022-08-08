FROM node:16.14.0

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
CMD ["yarn", "start:dev"]
EXPOSE 3000
