# Use the Node.js 16 LTS image as a base
# FROM node:lts-bullseye-slim

# Base image
FROM node:16.16.0-alpine

# Install some dependencies required by Vite
# RUN apt-get update
# RUN apt-get update && \
    # apt-get install -y libx11-xcb-dev libxtst-dev libpng-dev libxrender-dev libxext-dev libffi-dev

# Set the working directory
WORKDIR /app/storyo-app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the entire application to the working directory
COPY . .

# Build the production-ready app
# RUN yarn build

# Expose port 8081 for the Node.js application to listen on
EXPOSE 8081

# Start the Node.js application
# CMD ["yarn", "start"]
CMD ["yarn", "dev"]