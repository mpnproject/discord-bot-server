FROM node:16 as base

WORKDIR /home/app/mpn-discord-bot

RUN yarn add nodemon -g

COPY . ./
COPY ../src ./src

RUN yarn

FROM base as production
ENV NODE_ENV=production

CMD ["yarn", "build"]

FROM base as dev
ENV NODE_ENV=development

CMD ["yarn", "start:dev"]
