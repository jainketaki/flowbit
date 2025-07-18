# Use official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install packages
RUN npm install

# Copy all backend source code
COPY . .

# Expose backend port (usually 5000 or similar)
EXPOSE 5000

# Start backend app
CMD ["npm", "start"]
