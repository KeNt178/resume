FROM node:alpine
MAINTAINER lapwat

ADD src /root/src
WORKDIR /root/src
RUN npm install
CMD ["node", "index.js"]
