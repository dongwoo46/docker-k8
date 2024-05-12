FROM node:alpine as build

WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . /app
RUN npm run build

FROM nginx
# FROM node:alpine의 /app/build 폴더를 /usr/share/nginx/html로 복사
COPY --from=build  /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]