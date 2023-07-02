FROM node:18.16.1 as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY next-env.d.ts .
COPY next.config.js .
COPY tsconfig.json .
COPY jest.config.js .
COPY tsconfig.jest.json .
COPY .eslintrc.js .
COPY .prettierrc .

COPY app/ app/
COPY components/ components/
COPY hooks/ hooks/
COPY lib/ lib/

RUN npm run lint
RUN npm run test
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html/

EXPOSE 80

RUN date 102200122016

CMD ["nginx", "-g", "daemon off;"]
