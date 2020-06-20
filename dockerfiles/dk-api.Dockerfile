FROM node:lts

# Create app directory
WORKDIR /opt/api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./api/package.json ./
COPY ./api/yarn.lock ./

RUN yarn

# Bundle app source
COPY ./api ./

EXPOSE 8080
CMD npm start