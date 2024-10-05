FROM node:21
WORKDIR /src
COPY . /src
RUN npm install
CMD ["npm", "run", "dev"]
