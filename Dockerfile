# pull official base image
FROM node:18.16.0-alpine3.16 as build

# set working directory
WORKDIR /app

# add app
COPY . ./

# install dependencies
RUN npm ci --silent

# make build
RUN npm run build

# make build
RUN npm run build:inject-env

FROM nginx:1.24.0 as production

ENV NODE_ENV production

# Copy built assets from `build` image
COPY --from=build /app/dist /usr/share/nginx/html

# Add your nginx.conf
COPY build-conf/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
