FROM node:16.15.0
WORKDIR /countries-app
COPY ./package.json /countries-app/package.json
COPY ./public /countries-app/public
COPY ./src /countries-app/src
COPY ./tsconfig.json /countries-app/tsconfig.json
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
