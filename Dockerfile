# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:lts-gallium as build

ARG ENVIRONMENT=development
ARG SMPL_NPM_TOKEN
ENV SMPL_NPM_TOKEN=$SMPL_NPM_TOKEN


# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN yarn install


# Generate the build of the application
RUN yarn build --configuration $ENVIRONMENT


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:stable

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/www /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
