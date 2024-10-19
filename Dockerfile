# Stage 1: Build the Vite app
FROM node:21 AS build
WORKDIR /src

# Copy the source code and the configuration file
COPY . /src

# Install dependencies and build the app
RUN npm install
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /src/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
