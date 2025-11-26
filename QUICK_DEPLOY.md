# 🚀 Quick Deployment Reference Card

## One-Time Setup (Do Once)

### 1. On EC2 Instance
```bash
ssh -i ~/Downloads/ec2-access-pem.pem ec2-user@15.206.179.112

# Install prerequisites
sudo dnf update -y
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs nginx
sudo npm install -g pm2
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 2. Configure Nginx
```bash
sudo nano /etc/nginx/conf.d/portfolio.conf
```

Paste this:
```nginx
server {
    listen 80 default_server;
    server_name 15.206.179.112;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 3. Update Security Group
AWS Console → EC2 → Security Groups → Add Inbound Rule:
- Type: HTTP, Port: 80, Source: 0.0.0.0/0

---

## Deploy/Update (Every Time)

### Option A: Automated (Recommended)
```bash
# From local HarshPortfolio directory
chmod +x deploy.sh
./deploy.sh
```

### Option B: Manual
```bash
# Local
npm run build
tar -czf portfolio.tar.gz dist package.json package-lock.json ecosystem.config.js .env.production
scp -i ~/Downloads/ec2-access-pem.pem portfolio.tar.gz ec2-user@15.206.179.112:~/

# On EC2
ssh -i ~/Downloads/ec2-access-pem.pem ec2-user@15.206.179.112
cd ~/HarshPortfolio
tar -xzf ~/portfolio.tar.gz
mv .env.production .env
npm ci --only=production
pm2 restart harsh-portfolio || pm2 start ecosystem.config.js
```

---

## Common Commands

### PM2 Management
```bash
pm2 list                    # List all apps
pm2 logs harsh-portfolio    # View logs
pm2 restart harsh-portfolio # Restart app
pm2 stop harsh-portfolio    # Stop app
pm2 monit                   # Monitor resources
```

### Nginx Management
```bash
sudo systemctl status nginx
sudo systemctl restart nginx
sudo nginx -t
```

### Troubleshooting
```bash
# Check logs
pm2 logs harsh-portfolio --err
sudo tail -f /var/log/nginx/error.log

# Check ports
sudo lsof -i :3000
sudo lsof -i :80

# Check disk space
df -h
```

---

## Access URLs
- **Portfolio:** http://15.206.179.112
- **Direct (testing):** http://15.206.179.112:3000

---

## 💰 Cost: $0.00 (All Free Tier)
