FROM node:boron

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --production

COPY index.js ./

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]