FROM node:20-alpine3.20

WORKDIR /app

COPY ./fdj-backend/. ./

RUN rm -rf node_modules && \
  npm install &&  \
  npm run typeorm:migrate &&  \
  npm run seed

CMD ["npm", "run", "run:dev"]