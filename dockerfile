# Use the official Node.js image as the base image
FROM node:18

# Create and set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (optional if you have an Express server or API running on a specific port)
EXPOSE 3000

# Start the application
CMD ["node", "app/index.js"]