# Setup Instructions for English Teacher Website

## Quick Start

Follow these steps to get your website up and running:

### 1. Install Dependencies

Open PowerShell in this directory and run:

```powershell
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, TypeScript, etc.)

### 2. Run Development Server

```powershell
npm run dev
```

Then open your browser and go to: http://localhost:3000

### 3. Customize Content

#### Update Contact Information
Edit these files to add your real contact details:

- **Footer**: `components/Footer.tsx` - Update email, phone, address
- **Contact Page**: `app/kontakt/page.tsx` - Update contact info and map coordinates

#### Update Teacher Photo
Your photo `Mateusz.jpeg` is already configured in the homepage!

#### Update Map Location
In `app/kontakt/page.tsx`, find the Google Maps embed code and replace the coordinates with your actual location. You can generate a new embed code at: https://www.google.com/maps

### 4. Customize Colors (Optional)

The site uses navy blue and turquoise colors. To change:
- Edit `tailwind.config.ts`
- Modify the `colors` section

### 5. Build for Production

When ready to deploy:

```powershell
npm run build
npm start
```

### 6. Deploy to Vercel

1. Create a GitHub repository and push your code:
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Go to https://vercel.com
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy" (Vercel auto-detects Next.js)

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page (landing)
│   ├── specializacje/        # Specializations page
│   ├── jak-ucze/             # Teaching methods page
│   ├── kontakt/              # Contact page with map
│   └── layout.tsx            # Global layout & navigation
├── components/               # Reusable components
├── images/                   # Your images (Mateusz.jpeg)
└── public/                   # Public static files
```

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ SEO optimized with metadata
✅ Google Maps integration
✅ Contact form (needs backend integration)
✅ Modern animations and transitions
✅ Professional navy/turquoise color scheme
✅ Fast loading with Next.js optimization

## Next Steps

1. **Contact Form**: The form currently logs to console. To make it functional:
   - Use a service like Formspree, EmailJS, or SendGrid
   - Or create an API route in `app/api/contact/route.ts`

2. **Google Maps**: Update the embed URL in `app/kontakt/page.tsx` with your actual location

3. **Analytics**: Add Google Analytics by creating `app/layout.tsx` and including the tracking script

4. **Custom Domain**: After deploying to Vercel, add your custom domain in Vercel settings

## Troubleshooting

**If `npm install` fails:**
- Make sure Node.js 18+ is installed: `node --version`
- Delete `node_modules` and try again

**If images don't load:**
- Images must be in the `public` folder or use the `images` directory
- Check the file path matches exactly (case-sensitive)

**Port 3000 already in use:**
```powershell
npm run dev -- -p 3001
```

## Support

For any issues, check:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- TypeScript docs: https://www.typescriptlang.org/docs

Good luck with your English teaching website! 🎓
