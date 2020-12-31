FROM node:14-alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY next-env.d.ts .
COPY next.config.js .
COPY tsconfig.json .
COPY .eslintrc.js .

COPY src/ src/
RUN npm run build
RUN npm run lint
RUN npm run test

FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
