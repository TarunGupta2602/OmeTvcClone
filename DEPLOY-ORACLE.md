# Deploy Parvah on Oracle Cloud (Always Free)

Parvah needs a long-running Node process (`server.js` + Socket.io). Oracle Cloud **Always Free** is the best free host that stays online 24/7 (unlike Render free sleep).

This guide keeps your domain on **Cloudflare** (`parvah.online`) and runs the app on an Oracle VM.

---

## What you get

- Always-on free VM (Ampere ARM A1 Flex — typically up to 4 OCPU / 24 GB within Always Free limits)
- Same stack as today: `npm run build` + `npm start`
- HTTPS via Cloudflare (orange cloud) or Nginx + Let’s Encrypt

---

## 0) Before you start

You need:

- Oracle Cloud account: https://www.oracle.com/cloud/free/
- Credit/debit card for verification (Always Free resources stay $0 if you do not create paid shapes)
- GitHub access to this repo
- Cloudflare login for `parvah.online`

**Important:** If ARM capacity is “out of capacity”, switch account to **Pay As You Go** (billing). Always Free shapes still stay free when you stay within limits — this unlocks inventory in many regions.

---

## 1) Create the Always Free VM

1. Oracle Console → **Compute** → **Instances** → **Create instance**
2. Name: `parvah`
3. Image: **Ubuntu 22.04** (or 24.04)
4. Shape: **VM.Standard.A1.Flex** (Ampere)
   - OCPUs: `2` (or `1` if capacity is tight)
   - Memory: `12` GB (or `6` GB if tight)
5. Networking:
   - Create / use a VCN with a public subnet
   - Assign a **public IPv4**
6. SSH keys: upload or generate a key — save the private key
7. Create the instance and note the **public IP**

### Open firewall ports (Oracle + OS)

**Oracle Security List / NSG** (VCN → subnet security list):

| Direction | Protocol | Port | Source |
|-----------|----------|------|--------|
| Ingress | TCP | 22 | your IP (SSH) |
| Ingress | TCP | 80 | 0.0.0.0/0 |
| Ingress | TCP | 443 | 0.0.0.0/0 |

You will reverse-proxy to Node on `3000` locally; do **not** expose `3000` publicly if using Nginx.

---

## 2) First SSH login

```bash
ssh -i /path/to/private-key ubuntu@YOUR_ORACLE_PUBLIC_IP
```

Update packages:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl nginx ufw
```

UFW (optional but recommended):

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 3) Install Node.js 22 (LTS)

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

Install PM2:

```bash
sudo npm install -g pm2
```

---

## 4) Clone and build Parvah

```bash
sudo mkdir -p /var/www
sudo chown ubuntu:ubuntu /var/www
cd /var/www
git clone https://github.com/TarunGupta2602/OmeTvcClone.git parvah
cd parvah
npm install
```

Create production env file:

```bash
cat > .env.production <<'EOF'
NODE_ENV=production
PORT=3000
ALLOWED_ORIGINS=https://parvah.online
NEXT_PUBLIC_GTM_ID=GTM-MF9GKBNC
EOF
```

> Add `GOOGLE_SITE_VERIFICATION=...` if you use the HTML-tag method in GSC.

Build:

```bash
npm run build
```

---

## 5) Run with PM2 (keeps process alive)

```bash
cd /var/www/parvah
pm2 start npm --name parvah -- start
pm2 save
pm2 startup systemd -u ubuntu --hp /home/ubuntu
# run the command PM2 prints
```

Useful commands:

```bash
pm2 status
pm2 logs parvah
pm2 restart parvah
```

Health check locally on the VM:

```bash
curl -I http://127.0.0.1:3000
```

---

## 6) Nginx reverse proxy

```bash
sudo tee /etc/nginx/sites-available/parvah <<'EOF'
server {
    listen 80;
    server_name parvah.online www.parvah.online;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 86400;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/parvah /etc/nginx/sites-enabled/parvah
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Socket.io needs the `Upgrade` / `Connection` headers above — do not remove them.

---

## 7) Point Cloudflare DNS to Oracle

In Cloudflare → `parvah.online` → DNS:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | `@` | `YOUR_ORACLE_PUBLIC_IP` | Proxied (orange) |
| A | `www` | `YOUR_ORACLE_PUBLIC_IP` | Proxied (orange) |

Remove / replace old Render CNAME / A records that pointed at Render.

### Cloudflare SSL/TLS

- SSL/TLS mode: **Full** (or **Full (strict)** after you add a real origin cert)
- With orange cloud + Full, Cloudflare terminates HTTPS for visitors; origin can stay on HTTP:80 initially

Optional later: install Certbot on the VM and switch to Full (strict).

### WebSockets

Cloudflare → Network → ensure **WebSockets** is On (default on most plans).

---

## 8) Cut over from Render

1. Confirm `https://parvah.online` loads from Oracle (check `curl -I https://parvah.online` and `pm2 logs`)
2. Test chat: two browsers → Start Match → video/text works
3. Suspend / delete the Render web service so you are not double-hosting
4. Keep GSC property as `https://parvah.online/` (no change needed if domain stayed the same)

---

## 9) Deploy updates later

```bash
cd /var/www/parvah
git pull origin main
npm install
npm run build
pm2 restart parvah
```

Optional one-liner alias:

```bash
echo 'alias parvah-deploy="cd /var/www/parvah && git pull origin main && npm install && npm run build && pm2 restart parvah"' >> ~/.bashrc
source ~/.bashrc
```

---

## 10) Verify SEO + uptime

```bash
curl -I https://parvah.online/
curl -sL https://parvah.online/robots.txt | tail -20
curl -sL https://parvah.online/sitemap.xml | head -20
```

Cold-start check: hit the site twice a few minutes apart — both should be fast (no Render wake delay).

In GSC, after cutover, spot-check URL Inspection on `/` and a money page.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Oracle “Out of capacity” for A1 | Try another region/AD, reduce OCPU/RAM, or enable Pay As You Go and retry Always Free shape |
| Site 502 | `pm2 status`, `curl 127.0.0.1:3000`, check Nginx error log |
| Chat connects then fails | Confirm Cloudflare WebSockets On; Nginx Upgrade headers present; `ALLOWED_ORIGINS=https://parvah.online` |
| SSH locked out | Use Oracle Console → Cloud Shell / serial console; widen SSH source carefully |
| Accidental bill | Delete any non–Always Free shapes/volumes; stick to A1 Flex within free limits |

---

## Cost safety checklist

- Shape must be **Always Free eligible** (`VM.Standard.A1.Flex` within free OCPU/RAM)
- Do not create paid load balancers, extra block volumes beyond free, or paid GPUs
- Set an Oracle budget alert at $1 if available in your tenancy

---

## Why not Vercel free?

Vercel free is great for static/serverless Next.js. Parvah’s **custom Socket.io server** needs a long-lived Node process. A VM (Oracle) or always-on Node host is the correct free path without rewriting the app.
