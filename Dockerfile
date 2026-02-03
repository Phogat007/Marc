FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose port
EXPOSE 5174

# Default command
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5174"]
