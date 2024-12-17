# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /src

# Copy all files from your local directory into the container's working directory
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
