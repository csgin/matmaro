# 🚀 Deployment Guide

## Before Deployment Checklist

- [ ] All content is updated with real information
- [ ] Contact details are correct (email, phone, address)
- [ ] Teacher photo is in place
- [ ] Google Maps location is updated
- [ ] Colors match your branding
- [ ] Tested on mobile, tablet, and desktop
- [ ] All pages load correctly
- [ ] Contact form tested (even if not functional yet)

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is made by the creators of Next.js and offers:
- ✅ Free hosting
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Preview deployments for each commit

#### Steps:

1. **Create GitHub Repository**
```powershell
git init
git add .
git commit -m "Initial commit - English Teacher Website"
```

2. **Push to GitHub**
   - Go to https://github.com/new
   - Create a new repository (e.g., "english-teacher-website")
   - Follow the instructions to push your code:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/english-teacher-website.git
git branch -M main
git push -u origin main
```

3. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign up/login with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"
   - Wait 1-2 minutes for deployment

4. **Get Your URL**
   - Vercel gives you a free URL: `your-project.vercel.app`
   - You can add a custom domain later

### Option 2: Netlify (Alternative - Also Free)

1. **Build your project locally**
```powershell
npm run build
```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Drag and drop the `.next` folder
   - Or connect to GitHub for automatic deployments

### Option 3: Traditional Hosting (VPS/Shared Hosting)

If you have your own server:

```powershell
# Build the project
npm run build

# Upload these folders/files to your server:
# - .next
# - public
# - package.json
# - next.config.js

# On your server, run:
npm install --production
npm start
```

## Post-Deployment

### 1. Add Custom Domain

**On Vercel:**
1. Go to Project Settings → Domains
2. Add your domain (e.g., `www.englishteacher.pl`)
3. Update your DNS records as instructed

**DNS Settings:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 2. Update URLs in Code

In these files, replace placeholder URLs with your domain:

- `app/sitemap.ts` - Update all URLs
- `app/robots.ts` - Update sitemap URL
- `app/layout.tsx` - Add canonical URLs (optional)

### 3. Add Google Analytics (Optional)

1. Get your Google Analytics tracking ID
2. Add to `app/layout.tsx`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 4. Setup Contact Form Backend

The contact form needs a backend. Options:

**Option A: Formspree (Easiest)**
1. Go to https://formspree.io
2. Create a free account
3. Get your form endpoint
4. Update `components/ContactForm.tsx`:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  setStatus('sending')
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    setStatus('success')
  } else {
    setStatus('error')
  }
}
```

**Option B: EmailJS**
Similar to Formspree but allows custom email templates

**Option C: API Route (Advanced)**
Create `app/api/contact/route.ts` and use Nodemailer

### 5. SEO Optimization

- Submit sitemap to Google Search Console: `yourdomain.com/sitemap.xml`
- Submit to Bing Webmaster Tools
- Add structured data (optional)
- Create social media cards

### 6. Performance Check

Test your site:
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

## Maintenance

### Updating Content

1. Edit files locally
2. Commit and push to GitHub:
```powershell
git add .
git commit -m "Updated contact information"
git push
```
3. Vercel automatically redeploys

### Monitoring

- Check Vercel dashboard for traffic stats
- Monitor Google Analytics
- Check contact form submissions

## Troubleshooting

**Build fails on Vercel:**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Test `npm run build` locally first

**Images not loading:**
- Images in `public/` should be referenced as `/images/file.jpg`
- Images in `images/` need to be moved to `public/images/`

**Slow loading:**
- Optimize images (use WebP format)
- Enable caching headers
- Use Vercel's image optimization

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Vercel Community: https://github.com/vercel/next.js/discussions

---

🎉 **Congratulations!** Your English teacher website is now live!
