# 🎨 Customization Guide

## Quick Customizations

### 1. Change Site Title & Description

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Professional English Teacher',
  description: 'Your custom description here',
  keywords: 'English teacher, your city, your specialization',
}
```

Update for each page:
- `app/page.tsx` - Home page metadata
- `app/specializacje/page.tsx` - Specializations metadata
- `app/jak-ucze/page.tsx` - Teaching methods metadata
- `app/kontakt/page.tsx` - Contact metadata

### 2. Update Contact Information

**Footer** (`components/Footer.tsx`):
```typescript
<a href="mailto:your-email@example.com">
<a href="tel:+48123456789">
<span>Your City, Poland</span>
```

**Contact Page** (`app/kontakt/page.tsx`):
```typescript
const contactInfo = [
  {
    value: 'your-email@example.com',
  },
  {
    value: '+48 123 456 789',
  },
  // ... update all contact details
]
```

### 3. Change Navigation

**File:** `components/Navigation.tsx`

Add/remove menu items:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/your-page', label: 'Your Page' },
  // Add more pages
]
```

### 4. Customize Colors

**File:** `tailwind.config.ts`

Current colors:
- Primary (Navy): `#1e3a8a`
- Accent (Turquoise): `#06b6d4`

Change to your brand colors:
```typescript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',    // Main color
    dark: '#DARKER_SHADE',
    light: '#LIGHTER_SHADE',
  },
  accent: {
    DEFAULT: '#ACCENT_COLOR',
    light: '#LIGHTER_ACCENT',
    dark: '#DARKER_ACCENT',
  },
}
```

**Color Picker Tools:**
- Coolors: https://coolors.co/
- Adobe Color: https://color.adobe.com/

### 5. Update Google Maps

**File:** `app/kontakt/page.tsx`

**Get Your Embed Code:**
1. Go to https://www.google.com/maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `app/kontakt/page.tsx`

Or update coordinates in the URL:
```
!3d52.2297755  <- Your Latitude
!2d21.0122239  <- Your Longitude
```

### 6. Change Fonts

**File:** `app/layout.tsx`

Current font: Inter

To use different fonts from Google Fonts:
```typescript
import { Roboto, Montserrat } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})
```

Then update in HTML:
```typescript
<body className={roboto.variable}>
```

**Update Tailwind** (`tailwind.config.ts`):
```typescript
fontFamily: {
  sans: ['var(--font-roboto)', 'sans-serif'],
}
```

### 7. Add/Edit Specializations

**File:** `app/specializacje/page.tsx`

Add new specialization:
```typescript
const specializations = [
  {
    icon: <FiYourIcon />,
    title: 'Your Specialization',
    description: 'Description here',
    features: [
      'Feature 1',
      'Feature 2',
    ],
    color: 'primary',
  },
  // ... add more
]
```

### 8. Modify Teaching Method

**File:** `app/jak-ucze/page.tsx`

Update your teaching approach:
```typescript
const methodSteps = [
  {
    icon: <FiYourIcon />,
    title: 'Your Step',
    description: 'Your description',
  },
]
```

### 9. Update About Section

**File:** `app/page.tsx`

Find the "O mnie" (About) section and update:
```typescript
const achievements = [
  'Your achievement 1',
  'Your achievement 2',
  'Your certification',
  'Your experience',
]
```

Update statistics:
```typescript
<div className="text-4xl font-bold text-accent">10+</div>
<p className="mt-2">Lat doświadczenia</p>
// Change numbers and descriptions
```

### 10. Add New Page

1. Create new file: `app/your-page/page.tsx`

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your description',
}

export default function YourPage() {
  return (
    <section className="section">
      <div className="container-custom">
        <h1>Your Page</h1>
        <p>Your content here</p>
      </div>
    </section>
  )
}
```

2. Add to navigation in `components/Navigation.tsx`

### 11. Change Button Styles

**File:** `app/globals.css`

Current buttons: `btn-primary` and `btn-accent`

Customize:
```css
.btn-primary {
  @apply bg-YOUR-COLOR hover:bg-DARKER-COLOR text-white font-semibold py-3 px-6 rounded-lg;
}
```

### 12. Add Social Media Links

**Footer** (`components/Footer.tsx`):

Add after contact info:
```typescript
<div>
  <h3 className="text-xl font-bold mb-4">Social Media</h3>
  <div className="flex gap-4">
    <a href="https://facebook.com/yourpage" className="text-accent hover:text-accent-light">
      <FiFacebook size={24} />
    </a>
    <a href="https://instagram.com/yourpage" className="text-accent hover:text-accent-light">
      <FiInstagram size={24} />
    </a>
  </div>
</div>
```

### 13. Modify FAQ

**File:** `app/kontakt/page.tsx`

Update questions and answers:
```typescript
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer here.',
  },
]
```

### 14. Change Hero Background

**File:** `app/page.tsx`

Current: gradient background

Change to image:
```typescript
<section className="relative text-white section">
  <div className="absolute inset-0 z-0">
    <Image src="/hero-bg.jpg" fill className="object-cover" alt="" />
    <div className="absolute inset-0 bg-primary/80"></div>
  </div>
  <div className="relative z-10 container-custom">
    {/* Content */}
  </div>
</section>
```

### 15. Add Testimonials Section

Create `components/Testimonial.tsx`:
```typescript
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jan Kowalski',
      text: 'Great teacher!',
      rating: 5,
    },
  ]

  return (
    <section className="section bg-neutral-light">
      <div className="container-custom">
        <h2 className="text-center mb-12">Opinie uczniów</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <p>"{t.text}"</p>
              <p className="font-bold mt-4">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

Then import in `app/page.tsx`

## Advanced Customizations

### Add Blog Section

1. Create `app/blog/page.tsx` for blog list
2. Create `app/blog/[slug]/page.tsx` for individual posts
3. Use MDX for blog content

### Add Booking System

Integrate with Calendly, Cal.com, or create custom booking

### Add Payment Integration

Use Stripe or PayPal for online payments

### Multilingual Support

Use next-intl or next-i18next for Polish/English versions

## Design Tips

1. **Keep it simple** - Don't overcomplicate the design
2. **Mobile first** - Always test on mobile devices
3. **Fast loading** - Optimize images, minimize code
4. **Consistency** - Use the same spacing, colors, fonts throughout
5. **Accessibility** - Ensure good contrast, readable fonts

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- React Icons: https://react-icons.github.io/react-icons/
- Color Palette Generator: https://coolors.co/

---

Happy customizing! 🎨
