FROM node:21.6
WORKDIR /docker/app
COPY . /docker/app
RUN npm install
CMD npm run watch