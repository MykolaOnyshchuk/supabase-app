FROM node:14

RUN mkdir /docker

WORKDIR /docker

COPY ./package.json /docker

RUN npm install

COPY . /docker

RUN npm run build
CMD ["npm", "start"]
