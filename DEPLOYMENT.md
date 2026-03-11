# 🌐 Deploy Your Portfolio to the Web

## Option 1: Vercel (EASIEST - Recommended) ⭐

Vercel is the company behind Next.js. Deploying is **literally 3 clicks**.

### Step 1: Push to GitHub

```bash
# Navigate to your project
cd c:\siddportfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create main branch
git branch -M main

# Add remote (Replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/siddportfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"** (or Sign In if you have account)
3. Click **"New Project"**
4. Select your **GitHub repo** (siddportfolio)
5. Click **"Deploy"**

**Done!** Your site is now live at `siddportfolio.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, click your project
2. Go to **Settings → Domains**
3. Add your custom domain
4. Update DNS records as instructed
5. Your site now at **yourdomainname.com**

---

## Option 2: Build & Self-Host

Good if you want more control or have your own server.

### Step 1: Build Locally

```bash
cd c:\siddportfolio
npm run build
```

This creates optimized files in `.next/` folder.

### Step 2: Generate Static Version (Optional)

```bash
# Create static HTML files
npm run export
```

Output goes to `out/` folder - upload this to any hosting.

### Step 3: Upload & Run

#### For Node.js Hosting (AWS, Azure, DigitalOcean, etc)
```bash
# Copy entire project to server
# Then run:
npm run build
npm start
```

#### For Static Hosting (GitHub Pages, Netlify, etc)
```bash
# Use the 'out' folder from npm run export
# Upload 'out' folder contents
```

---

## Option 3: GitHub Pages (Free)

Great if you use GitHub Pages already.

### Step 1: Install gh-pages

```bash
cd c:\siddportfolio
npm install --save-dev gh-pages
```

### Step 2: Update package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "deploy": "gh-pages -d out"
  },
  "homepage": "https://YOUR_USERNAME.github.io/siddportfolio"
}
```

### Step 3: Deploy

```bash
npm run deploy
```

Your site is now at: `https://YOUR_USERNAME.github.io/siddportfolio`

---

## Option 4: Netlify (Easy Alternative)

Another great option for hosting Next.js apps.

### Step 1: Connect GitHub

1. Go to **[netlify.com](https://netlify.com)**
2. Click **"New site from Git"**
3. Select **GitHub**
4. Choose **siddportfolio** repo

### Step 2: Configure Build

```
Build command: npm run build
Publish directory: .next
```

### Step 3: Deploy

Click **"Deploy site"**. Done!

Your site is at: `your-site-name.netlify.app`

---

## Option 5: AWS Amplify

For enterprise-grade hosting.

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify init

# Deploy
amplify publish
```

---

## 📋 Deployment Comparison

| Platform | Easiness | Cost | Domain | Speed |
|----------|----------|------|--------|-------|
| **Vercel** ⭐ | ⭐⭐⭐⭐⭐ | Free | Free .vercel.app | ⚡⚡⚡⚡⚡ |
| **Netlify** | ⭐⭐⭐⭐ | Free | Free .netlify.app | ⚡⚡⚡⚡ |
| **GitHub Pages** | ⭐⭐⭐ | Free | *.github.io | ⚡⚡⚡ |
| **AWS** | ⭐⭐ | $$ | Custom | ⚡⚡⚡ |
| **Self-hosted** | ⭐ | $$ | Custom | Depends |

**Recommendation:** Use **Vercel** - it's made for Next.js and takes literally 2 minutes.

---

## 🔴 Troubleshooting

### "Build fails on Vercel"
- Check `README.md` for environment variables
- Ensure all image files are in `public/` folder
- Check Node.js version (should be 16+)

### "Site is blank"
- Check browser console for errors (F12)
- Ensure images have correct paths
- Verify build completed successfully

### "Images not showing"
- Files must be in `public/` folder
- Check file names match exactly (case-sensitive)
- Rebuild and redeploy

### "Custom domain not working"
- DNS can take up to 24 hours to propagate
- Check Vercel/Netlify instructions for your DNS provider
- Test with DNS checker: [whatsmydns.net](https://whatsmydns.net)

---

## 🎯 Post-Deployment Checklist

After your site is live:

- [ ] Visit your live URL
- [ ] Test on mobile (responsive)
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test contact form
- [ ] Share on LinkedIn with link
- [ ] Add to GitHub bio
- [ ] Update resume with portfolio URL

---

## 📱 Share Your Portfolio

### LinkedIn
```
Just deployed my new portfolio! Built with Next.js, fully responsive.
Check it out: [YOUR_URL]
#Portfolio #NextJS #WebDevelopment
```

### GitHub
Add to your profile README:
```markdown
## 🌐 Portfolio
Visit my professional portfolio: [YOUR_URL]
Built with Next.js, React, and CSS Modules.
```

### Email Signature
```
---
Siddharth Kumar
📧 siddharthk1500@gmail.com
🔗 [Your Portfolio URL]
💼 LinkedIn: linkedin.com/in/siddharth-kumar-0938ab245
🐙 GitHub: github.com/siddharthhkumar
```

---

## 🚀 Environment Setup (For Developers)

If deploying to more complex hosting:

Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

Then reference in components:
```javascript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
```

---

## 📈 Monitor Your Site

### Vercel Analytics (Built-in)
1. Go to Vercel Project Settings
2. Enable Analytics
3. See real-time visitor data

### Google Analytics (Optional)
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property
3. Add measurement ID to your site

---

## 🔄 Continuous Deployment

Once deployed:

```bash
# Make changes locally
# Push to GitHub
git add .
git commit -m "Update portfolio"
git push

# Vercel automatically rebuilds and deploys!
# No manual steps needed
```

---

## 💡 Pro Tips

1. **Use a custom domain** - Looks more professional than `vercel.app`
2. **Set up email forwarding** - Get emails without storing credentials
3. **Enable HTTPS** - Done automatically by all platforms
4. **Add metadata** - Update `app/layout.js` for SEO
5. **Monitor uptime** - Services like UptimeRobot alert if site goes down

---

## 🎉 You're Live!

Once deployed, you have a **production-ready portfolio** that:
- ✅ Works on all devices
- ✅ Loads in <1 second
- ✅ Shows up in Google search
- ✅ Impresses employers/recruiters
- ✅ Automatically deploys on code push

---

## 📞 Need Help?

**If deployment fails:**
1. Check console errors (browser F12 or build logs)
2. Ensure all files committed to GitHub
3. Verify `package.json` exists
4. Check `.gitignore` doesn't exclude important files

**If images don't show:**
1. Files must be in `public/` folder
2. Reference as `/filename.jpg`
3. Check exact file names (case matters)

---

## 🎯 Next Steps

1. **Deploy to Vercel** (2 minutes)
2. **Test on mobile** (1 minute)
3. **Share on LinkedIn** (1 minute)
4. **Done!** Your portfolio is live! 🚀

---

**Choose Vercel. It takes literally 2 minutes.** ⚡

Good luck! 🎉
