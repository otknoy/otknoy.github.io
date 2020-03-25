FROM node:12-alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY dist/index.html dist/
COPY src/ src/
COPY babel.config.js .
COPY webpack.config.js .
COPY .eslintrc.js .
RUN npm run lint
RUN npm run test
RUN npm run build


FROM nginx:alpine

COPY --from=builder /app/dist/ /usr/share/nginx/html/

RUN ls -ltra /usr/share/nginx/html/


