FROM node:14-alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY public/index.html public/
COPY src/ src/
COPY babel.config.js .
COPY webpack.config.js .
COPY tsconfig.json .
COPY jest.config.js .
COPY .eslintrc.js .
RUN npm run build
RUN npm run lint
RUN npm run test


FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
