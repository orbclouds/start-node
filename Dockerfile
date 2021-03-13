FROM node:12.17.0-slim
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install --production
COPY . .
CMD ["yarn", "run", "start"]
