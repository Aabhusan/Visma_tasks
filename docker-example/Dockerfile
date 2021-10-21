FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# COPY package*.json ./

RUN npm install -g nodemon

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "nodemon", "app.js" ]