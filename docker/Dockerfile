FROM node:16 as base

WORKDIR /home/node/mpn-discord-bot

COPY package*.json ./
COPY tsconfig*.json ./
COPY nodemon.json ./
COPY .eslintrc.json ./

COPY ../src ./src
COPY .env ./

RUN yarn

FROM base as production
ENV NODE_ENV=production

CMD ["yarn", "build"]

FROM base as dev
ENV NODE_ENV=development

CMD ["yarn", "start:dev"]
