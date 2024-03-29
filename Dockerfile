# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /index.js

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Start your Node.js application
CMD ["node", "index.js"]
