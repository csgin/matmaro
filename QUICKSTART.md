# 🚀 QUICK START - English Teacher Website

## ⚡ 3 Steps to Get Started

### 1️⃣ Install (First Time Only)
Open PowerShell in this folder and run:
```powershell
npm install
```
Wait 1-2 minutes for installation to complete.

### 2️⃣ Run Locally
```powershell
npm run dev
```
Open browser: http://localhost:3000

### 3️⃣ Customize
See guides below for what to change.

---

## 📚 Documentation Guide

### 🎯 Start Here
1. **START_HERE.md** - Complete overview ⭐ READ FIRST
2. **FILE_STRUCTURE.md** - Where everything is located

### 🔧 Setup & Customization
3. **SETUP.md** - Detailed installation guide
4. **CUSTOMIZATION.md** - How to change content/colors
5. **CODE_SNIPPETS.md** - Copy-paste code examples

### 🚀 Deployment & Launch
6. **DEPLOYMENT.md** - How to publish online
7. **CHECKLIST.md** - Pre-launch checklist
8. **PROJECT_SUMMARY.md** - What's included

---

## ✏️ Quick Customization Guide

### Must Update Before Launch:

**1. Contact Information**
- Files: `components/Footer.tsx` and `app/kontakt/page.tsx`
- Change: email, phone, address

**2. Google Maps Location**
- File: `app/kontakt/page.tsx`
- Update the iframe embed code with your location

**3. About Section**
- File: `app/page.tsx`
- Update: achievements, statistics, experience

**4. Site Title**
- File: `app/layout.tsx`
- Change website title and description

### Optional Customization:

**5. Colors**
- File: `tailwind.config.ts`
- Current: Navy blue (#1e3a8a) + Turquoise (#06b6d4)

**6. Specializations**
- File: `app/specializacje/page.tsx`
- Add/remove specialization cards

**7. Teaching Methods**
- File: `app/jak-ucze/page.tsx`
- Customize your teaching approach

**8. FAQ**
- File: `app/kontakt/page.tsx`
- Update questions and answers

---

## 🎨 What's Included

### Pages (4 Total)
✅ Home - Landing page with hero, features, stats
✅ Specializacje - Teaching specializations
✅ Jak uczę - Teaching methodology
✅ Kontakt - Contact form + map + FAQ

### Components (4 Total)
✅ Navigation - Responsive header menu
✅ Footer - Contact info and links
✅ ContactForm - Contact form
✅ SpecializationCard - Reusable cards

### Features
✅ Mobile responsive
✅ SEO optimized
✅ Fast loading
✅ Modern design
✅ Navy + Turquoise colors
✅ Google Maps integration
✅ Professional animations

---

## 📱 Testing Checklist

Before launching, test:
- [ ] View on mobile phone
- [ ] View on tablet
- [ ] View on desktop
- [ ] Click all navigation links
- [ ] Test contact form
- [ ] Check all content is correct
- [ ] Verify contact info is updated

---

## 🚀 Deploy to Vercel (Free)

### Step 1: Push to GitHub
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

### Step 2: Deploy
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Click "Deploy"
6. Wait 2 minutes - Done! ✅

You'll get a free URL: `your-project.vercel.app`

---

## 💡 Common Commands

```powershell
# First time setup
npm install

# Run locally (development)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for errors
npm run lint
```

---

## 🆘 Troubleshooting

**Problem: Red errors everywhere**
- Solution: Run `npm install` first

**Problem: Port 3000 already in use**
- Solution: `npm run dev -- -p 3001`

**Problem: Images not loading**
- Solution: Make sure images are in `public/images/` or `images/` folder

**Problem: Page not found**
- Solution: Check file paths are correct

**Problem: Build fails**
- Solution: Run `npm run lint` to see errors

---

## 📞 Important Files Quick Reference

| Need to change... | Edit this file... |
|-------------------|-------------------|
| Contact email/phone | `components/Footer.tsx` |
| Contact form fields | `components/ContactForm.tsx` |
| Home page content | `app/page.tsx` |
| Map location | `app/kontakt/page.tsx` |
| Colors | `tailwind.config.ts` |
| Navigation menu | `components/Navigation.tsx` |
| Specializations | `app/specializacje/page.tsx` |
| Teaching methods | `app/jak-ucze/page.tsx` |

---

## 🎯 Next Actions

### Right Now:
1. Run `npm install`
2. Run `npm run dev`
3. Open http://localhost:3000
4. See your website! 🎉

### Today:
1. Update contact information
2. Update about section
3. Test on mobile

### This Week:
1. Customize colors (if needed)
2. Update all content
3. Test everything
4. Deploy to Vercel

### After Launch:
1. Add custom domain
2. Set up Google Analytics
3. Connect contact form backend
4. Share on social media

---

## 📖 Documentation Structure

```
Quick Start:
├── QUICKSTART.md (this file) ⭐ START HERE
├── START_HERE.md - Overview
└── SETUP.md - Detailed setup

Customization:
├── CUSTOMIZATION.md - How to customize
├── CODE_SNIPPETS.md - Code examples
└── FILE_STRUCTURE.md - Where files are

Deployment:
├── DEPLOYMENT.md - How to deploy
├── CHECKLIST.md - Pre-launch checklist
└── PROJECT_SUMMARY.md - What's included
```

---

## ✅ Quick Wins

1. **5 minutes**: Run `npm install` and `npm run dev`
2. **15 minutes**: Update contact information
3. **30 minutes**: Customize about section
4. **1 hour**: Review all content
5. **2 hours**: Deploy to Vercel

---

## 🎉 Success!

Your website is ready to use! Just:
1. Install dependencies
2. Customize content
3. Deploy

**Need help?** Check the documentation files above.

**Ready to start?** Run: `npm install`

---

**Your English Teacher Website** 🎓
**Version:** 1.0.0
**Status:** Ready to Launch ✅
**Date:** January 24, 2026
