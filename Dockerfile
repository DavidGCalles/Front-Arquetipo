# Stage 1: Build the Vite app
FROM node:21 AS build
WORKDIR /src

# Copy the source code and the configuration file
COPY . /src
RUN test -f firebase.js && cp firebase.js /src/configs/firebase.js || echo "firebase.js not found, skipping copy"

# Install dependencies and build the app
RUN npm install
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /src/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
