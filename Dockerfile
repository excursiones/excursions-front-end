FROM node:carbon-slim

# Create app directory
WORKDIR /git/excursions-app-front

# Install app dependencies
COPY package.json /git/excursions-app-front/
RUN npm install

# Bundle app source
COPY . /git/excursions-app-front/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
