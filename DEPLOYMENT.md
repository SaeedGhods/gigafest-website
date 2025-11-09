# Deployment Guide for Gigafest Management Group Website

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `gigafest-website` (or any name you prefer)
4. Description: "Gigafest Management Group Website"
5. Set to **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd "/Users/saeedghods/Gigafest Management Group"
git remote add origin https://github.com/YOUR_USERNAME/gigafest-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select branch: **main**
6. Select folder: **/ (root)**
7. Click **Save**

Your site will be available at: `https://YOUR_USERNAME.github.io/gigafest-website/`

## Step 4: Configure Custom Domain (gigafestmg.com)

### A. Purchase Domain (if not already owned)

If you haven't purchased `gigafestmg.com` yet:
1. Go to a domain registrar (Namecheap, GoDaddy, Google Domains, etc.)
2. Search for `gigafestmg.com`
3. Purchase the domain

### B. Configure DNS Records

In your domain registrar's DNS settings, add these records:

**For Apex Domain (gigafestmg.com):**
- Type: **A**
- Name: `@` (or leave blank)
- Value: `185.199.108.153`
- TTL: 3600 (or default)

- Type: **A**
- Name: `@` (or leave blank)
- Value: `185.199.109.153`
- TTL: 3600

- Type: **A**
- Name: `@` (or leave blank)
- Value: `185.199.110.153`
- TTL: 3600

- Type: **A**
- Name: `@` (or leave blank)
- Value: `185.199.111.153`
- TTL: 3600

**OR use CNAME (if your registrar supports it for apex domains):**
- Type: **CNAME**
- Name: `@` (or leave blank)
- Value: `YOUR_USERNAME.github.io`
- TTL: 3600

**For www subdomain (www.gigafestmg.com):**
- Type: **CNAME**
- Name: `www`
- Value: `YOUR_USERNAME.github.io`
- TTL: 3600

### C. Configure Domain in GitHub

1. Go to your repository → **Settings** → **Pages**
2. Under "Custom domain", enter: `gigafestmg.com`
3. Check **"Enforce HTTPS"** (this will be available after DNS propagates)
4. Click **Save**

### D. Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- You can check propagation status at: https://www.whatsmydns.net/
- Once DNS is configured, GitHub will automatically set up SSL/HTTPS

## Step 5: Verify Everything Works

1. Visit `https://gigafestmg.com` (may take a few hours after DNS setup)
2. Visit `https://www.gigafestmg.com` (if configured)
3. Test the contact form to ensure emails are working

## Troubleshooting

### Site not loading?
- Check DNS propagation: https://www.whatsmydns.net/
- Verify GitHub Pages is enabled in repository settings
- Check that CNAME file is in the root of your repository

### HTTPS not working?
- Wait 24-48 hours after adding custom domain
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings
- Clear your browser cache

### Domain not connecting?
- Verify DNS records are correct
- Check that CNAME file contains: `gigafestmg.com`
- Ensure domain is added in GitHub Pages settings

## Notes

- The `CNAME` file is already created in your repository root
- GitHub Pages will automatically rebuild when you push changes
- To update the site, just push new commits to the main branch

