# 🚀 Portfolio Deployment Guide - EC2 Free Tier

## Overview
This guide will help you deploy your HarshPortfolio website to your existing EC2 instance alongside your socket-queries project, using **only free tier resources**.

---

## 📋 Prerequisites Checklist

- [x] EC2 instance running (Amazon Linux 2023)
- [x] SSH access with key file: `ec2-access-pem.pem`
- [x] Existing project: `socket-queries` running
- [x] RDS PostgreSQL database (optional for portfolio)

---

## 🎯 Deployment Architecture

```
EC2 Instance (15.206.179.112)
├── socket-queries (Port: 5000 or other)
├── HarshPortfolio (Port: 3000)
└── Nginx (Port: 80)
    ├── /socket → socket-queries
    └── / → HarshPortfolio
```

---

## 📝 Step-by-Step Instructions

### **STEP 1: Prepare EC2 Security Group**

1. **Open AWS Console** → EC2 → Security Groups
2. **Find your EC2 instance's security group**
3. **Add Inbound Rules** (if not already present):
   ```
   Type: HTTP
   Protocol: TCP
   Port: 80
   Source: 0.0.0.0/0 (Anywhere IPv4)
   
   Type: Custom TCP
   Protocol: TCP
   Port: 3000
   Source: 0.0.0.0/0 (For testing only)
   ```

**💰 Cost: FREE** (Security groups are free)

---

### **STEP 2: Connect to EC2 and Install Prerequisites**

```bash
# From your local machine
cd ~/Downloads
ssh -i ec2-access-pem.pem ec2-user@15.206.179.112
```

Once connected, run these commands:

```bash
# Update system packages (free)
sudo dnf update -y

# Install Node.js 20 (LTS) if not already installed
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

# Verify installation
node --version  # Should show v20.x.x
npm --version

# Install PM2 globally (process manager)
sudo npm install -g pm2

# Install Nginx (web server / reverse proxy)
sudo dnf install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

**💰 Cost: FREE** (All software is open source)

---

### **STEP 3: Configure Environment Variables**

Before deploying, update the `.env.production` file locally:

```bash
# Edit .env.production in your local project
# Update these values:
NODE_ENV=production
PORT=3000

# If you need database (optional):
# DATABASE_URL=postgresql://username:password@your-rds-endpoint.region.rds.amazonaws.com:5432/portfolio_db

# Generate a secure session secret:
SESSION_SECRET=$(openssl rand -base64 32)
```

**Note:** The portfolio works without a database. Database is only needed if you add authentication features.

---

### **STEP 4: Deploy Using Automated Script**

From your local machine, in the HarshPortfolio directory:

```bash
# Make the deployment script executable
chmod +x deploy.sh

# Edit the script to update the EC2_KEY path if needed
# The default is ~/Downloads/ec2-access-pem.pem

# Run the deployment
./deploy.sh
```

The script will:
1. ✅ Build your project locally
2. ✅ Package necessary files
3. ✅ Upload to EC2
4. ✅ Install dependencies on EC2
5. ✅ Start the app with PM2

**💰 Cost: FREE** (Using existing EC2 instance)

---

### **STEP 5: Manual Deployment (Alternative Method)**

If you prefer manual deployment:

```bash
# 1. Build locally
npm run build

# 2. Create deployment package
tar -czf portfolio-deploy.tar.gz dist package.json package-lock.json ecosystem.config.js .env.production

# 3. Upload to EC2
scp -i ~/Downloads/ec2-access-pem.pem portfolio-deploy.tar.gz ec2-user@15.206.179.112:~/

# 4. SSH into EC2
ssh -i ~/Downloads/ec2-access-pem.pem ec2-user@15.206.179.112

# 5. On EC2: Extract and setup
cd ~
mkdir -p HarshPortfolio
tar -xzf portfolio-deploy.tar.gz -C HarshPortfolio/
cd HarshPortfolio

# 6. Rename env file
mv .env.production .env

# 7. Install dependencies
npm ci --only=production

# 8. Create logs directory
mkdir -p logs

# 9. Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Follow the instructions to enable auto-start on reboot
```

---

### **STEP 6: Configure Nginx as Reverse Proxy**

SSH into your EC2 and configure Nginx:

```bash
# Create Nginx configuration
sudo nano /etc/nginx/conf.d/portfolio.conf
```

Add this configuration:

```nginx
# Portfolio - Main site
server {
    listen 80 default_server;
    server_name 15.206.179.112;

    # Main portfolio application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Socket Queries - Subdirectory (adjust port if different)
server {
    listen 80;
    server_name 15.206.179.112;

    location /socket {
        proxy_pass http://localhost:5000;  # Adjust port if socket-queries uses different port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Note:** Adjust the socket-queries port (5000) if your existing project uses a different port.

```bash
# Test Nginx configuration
sudo nginx -t

# If successful, reload Nginx
sudo systemctl reload nginx
```

**💰 Cost: FREE** (Nginx is free and open source)

---

### **STEP 7: Verify Deployment**

```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs harsh-portfolio --lines 50

# Check if app is running
curl http://localhost:3000

# Check Nginx status
sudo systemctl status nginx
```

---

### **STEP 8: Access Your Portfolio**

Open your browser and visit:
- **Portfolio:** `http://15.206.179.112`
- **Direct access (for testing):** `http://15.206.179.112:3000`
- **Socket Queries:** `http://15.206.179.112/socket` (if configured)

---

## 🔧 Post-Deployment Management

### **View Application Logs**
```bash
pm2 logs harsh-portfolio
pm2 logs harsh-portfolio --lines 100
```

### **Restart Application**
```bash
pm2 restart harsh-portfolio
```

### **Stop Application**
```bash
pm2 stop harsh-portfolio
```

### **Update Deployment**
```bash
# From local machine, run:
./deploy.sh
```

### **Monitor Resources**
```bash
# Check memory and CPU usage
pm2 monit

# Check disk space (stay within free tier limits)
df -h

# Check EC2 instance metrics in AWS Console
```

---

## 💰 Cost Breakdown (All FREE)

| Resource | Usage | Cost |
|----------|-------|------|
| EC2 t2.micro/t3.micro | 750 hours/month | **FREE** (Free Tier) |
| RDS db.t3.micro | 750 hours/month | **FREE** (Free Tier) |
| Data Transfer | 15 GB/month | **FREE** (Free Tier) |
| Nginx | Unlimited | **FREE** (Open Source) |
| PM2 | Unlimited | **FREE** (Open Source) |
| Node.js | Unlimited | **FREE** (Open Source) |

**Total Monthly Cost: $0.00** ✅

---

## 🛡️ Security Best Practices (Free)

1. **Keep packages updated:**
   ```bash
   sudo dnf update -y
   npm update
   ```

2. **Use environment variables** for sensitive data (already configured)

3. **Enable automatic security updates:**
   ```bash
   sudo dnf install -y dnf-automatic
   sudo systemctl enable --now dnf-automatic.timer
   ```

4. **Monitor logs regularly:**
   ```bash
   pm2 logs
   sudo tail -f /var/log/nginx/error.log
   ```

---

## 🐛 Troubleshooting

### **Issue: Port 3000 already in use**
```bash
# Find what's using the port
sudo lsof -i :3000
# Kill the process or change PORT in .env
```

### **Issue: PM2 app not starting**
```bash
pm2 logs harsh-portfolio --err
# Check the error logs and fix accordingly
```

### **Issue: Nginx not serving the site**
```bash
# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Verify Nginx config
sudo nginx -t
```

### **Issue: Out of disk space**
```bash
# Check disk usage
df -h

# Clean up old logs
pm2 flush
sudo journalctl --vacuum-time=7d

# Clean npm cache
npm cache clean --force
```

---

## 📊 Monitoring Free Tier Limits

**Important:** Monitor your usage to stay within free tier:

1. **EC2 Dashboard** → Check running hours (max 750/month)
2. **RDS Dashboard** → Check database hours (max 750/month)
3. **CloudWatch** → Monitor data transfer (max 15 GB/month)

**Set up billing alerts** (FREE):
- AWS Console → Billing → Billing Preferences → Enable "Receive Free Tier Usage Alerts"

---

## 🎉 Success Checklist

- [ ] EC2 security group allows HTTP (port 80) and port 3000
- [ ] Node.js, PM2, and Nginx installed on EC2
- [ ] Project built and deployed to `/home/ec2-user/HarshPortfolio`
- [ ] PM2 running the application successfully
- [ ] Nginx configured as reverse proxy
- [ ] Portfolio accessible at `http://15.206.179.112`
- [ ] PM2 set to auto-start on reboot
- [ ] Logs are being generated properly

---

## 📞 Quick Commands Reference

```bash
# Deploy/Update
./deploy.sh

# SSH to EC2
ssh -i ~/Downloads/ec2-access-pem.pem ec2-user@15.206.179.112

# PM2 Commands
pm2 list
pm2 logs harsh-portfolio
pm2 restart harsh-portfolio
pm2 stop harsh-portfolio
pm2 delete harsh-portfolio
pm2 monit

# Nginx Commands
sudo systemctl status nginx
sudo systemctl restart nginx
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

---

## 🔄 Future Enhancements (Still Free)

1. **Add a custom domain** (requires purchasing domain - not free)
2. **Enable HTTPS with Let's Encrypt** (FREE SSL certificate)
3. **Set up GitHub Actions for CI/CD** (FREE for public repos)
4. **Add CloudWatch monitoring** (FREE tier: 10 metrics, 10 alarms)

---

**Need help?** Check the logs first:
```bash
pm2 logs harsh-portfolio
sudo tail -f /var/log/nginx/error.log
```
