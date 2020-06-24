FROM node:lts

# Create app directory
WORKDIR /opt/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./app/package.json ./
COPY ./app/yarn.lock ./

RUN yarn

# Bundle app source
COPY ./app ./

EXPOSE 8080
CMD npm run dev