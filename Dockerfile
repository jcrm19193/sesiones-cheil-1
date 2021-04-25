FROM node:13
LABEL maintainer="joshua.rosasm@gmail.com"
WORKDIR /app

COPY package.json .
RUN npm install
ADD src ./src

CMD ["npm", "start"]



