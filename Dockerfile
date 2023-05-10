FROM node:18 as build
WORKDIR /FrontEnd

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /FrontEnd/build /usr/share/nginx/html