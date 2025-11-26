#!/bin/bash

# EC2 Setup Script - Run this ON your EC2 instance
# This installs all prerequisites needed for the portfolio

set -e

echo "🔧 Setting up EC2 instance for portfolio deployment..."

# Update system
echo "📦 Updating system packages..."
sudo dnf update -y

# Install Node.js 20 (LTS)
echo "📦 Installing Node.js 20..."
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

# Verify Node.js installation
echo "✅ Node.js version:"
node --version
echo "✅ npm version:"
npm --version

# Install PM2 globally
echo "📦 Installing PM2 process manager..."
sudo npm install -g pm2

# Verify PM2 installation
echo "✅ PM2 version:"
pm2 --version

# Install Nginx
echo "📦 Installing Nginx..."
sudo dnf install -y nginx

# Start and enable Nginx
echo "🚀 Starting Nginx..."
sudo systemctl start nginx
sudo systemctl enable nginx

# Check Nginx status
echo "✅ Nginx status:"
sudo systemctl status nginx --no-pager

echo ""
echo "🎉 EC2 setup complete!"
echo ""
echo "Next steps:"
echo "1. Configure Nginx (see DEPLOYMENT_GUIDE.md)"
echo "2. Update AWS Security Group to allow ports 80 and 3000"
echo "3. Run ./deploy.sh from your local machine"
