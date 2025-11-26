#!/bin/bash

# Deployment script for HarshPortfolio
# This script automates the deployment process to EC2

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Configuration
EC2_USER="ec2-user"
EC2_HOST="15.206.179.112"
EC2_KEY="~/Downloads/ec2-access-pem.pem"
REMOTE_DIR="/home/ec2-user/HarshPortfolio"
APP_NAME="harsh-portfolio"

echo "📦 Building the project locally..."
npm run build

echo "📤 Creating deployment package..."
# Create a temporary directory for deployment files
DEPLOY_DIR="deploy_temp"
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR

# Copy necessary files
cp -r dist $DEPLOY_DIR/
cp package.json $DEPLOY_DIR/
cp package-lock.json $DEPLOY_DIR/
cp ecosystem.config.cjs $DEPLOY_DIR/
cp .env.production $DEPLOY_DIR/.env

echo "🔐 Connecting to EC2 and deploying..."

# Create remote directory if it doesn't exist
ssh -i $EC2_KEY $EC2_USER@$EC2_HOST "mkdir -p $REMOTE_DIR"

# Upload files to EC2
echo "📤 Uploading files to EC2..."
scp -i $EC2_KEY -r $DEPLOY_DIR/* $EC2_USER@$EC2_HOST:$REMOTE_DIR/

# Execute deployment commands on EC2
echo "🔧 Installing dependencies and starting application on EC2..."
ssh -i $EC2_KEY $EC2_USER@$EC2_HOST << 'ENDSSH'
cd /home/ec2-user/HarshPortfolio

# Install production dependencies only
npm ci --only=production

# Create logs directory
mkdir -p logs

# Restart the application with PM2
pm2 delete harsh-portfolio 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save

echo "✅ Application deployed successfully!"
pm2 status
ENDSSH

# Cleanup
rm -rf $DEPLOY_DIR

echo "🎉 Deployment completed successfully!"
echo "📍 Your portfolio should be accessible at http://15.206.179.112:3000"
echo "💡 To view logs: ssh into EC2 and run 'pm2 logs harsh-portfolio'"
