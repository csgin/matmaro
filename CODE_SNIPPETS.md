# 🎨 Common Code Snippets

Useful code snippets you might need when customizing your website.

## 🎯 Adding a New Page

### 1. Create the page file
**File:** `app/your-page/page.tsx`

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Page Title - English Teacher',
  description: 'Your page description for SEO',
}

export default function YourPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4">Your Page Title</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your page description
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container-custom">
          <h2>Your Content Here</h2>
          <p className="text-lg text-neutral-dark mt-4">
            Your text content
          </p>
        </div>
      </section>
    </>
  )
}
```

### 2. Add to navigation
**File:** `components/Navigation.tsx`

Find `navLinks` array and add:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/specializacje', label: 'Moje Specializacje' },
  { href: '/jak-ucze', label: 'Jak uczę' },
  { href: '/your-page', label: 'Your Page' }, // Add this
  { href: '/kontakt', label: 'Kontakt' },
]
```

## 🎴 Creating a New Card Component

**File:** `components/YourCard.tsx`

```typescript
interface YourCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function YourCard({ title, description, icon }: YourCardProps) {
  return (
    <div className="card hover:scale-105 transition-transform duration-300">
      {icon && (
        <div className="text-4xl text-accent mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-neutral-dark">{description}</p>
    </div>
  )
}
```

**Usage:**
```typescript
import YourCard from '@/components/YourCard'
import { FiStar } from 'react-icons/fi'

<YourCard 
  title="Card Title"
  description="Card description"
  icon={<FiStar />}
/>
```

## 🎨 Custom Color Gradients

### Gradient Background
```typescript
<div className="bg-gradient-to-r from-primary to-accent">
  Content
</div>
```

### Gradient Text
```typescript
<h1 className="text-gradient">
  Gradient Text
</h1>
```

### Custom Gradients
```typescript
<div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
  Content
</div>
```

## 📱 Responsive Layouts

### Two Column Layout
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### Three Column Layout
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

### Four Column Layout
```typescript
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

## 🔘 Button Styles

### Primary Button
```typescript
<button className="btn-primary">
  Click Me
</button>
```

### Accent Button
```typescript
<button className="btn-accent">
  Click Me
</button>
```

### Custom Button
```typescript
<button className="bg-white text-primary hover:bg-neutral-light font-semibold py-3 px-6 rounded-lg transition-all duration-300">
  Custom Button
</button>
```

### Link as Button
```typescript
import Link from 'next/link'

<Link href="/page" className="btn-primary inline-block">
  Button Link
</Link>
```

## 📝 Form Elements

### Text Input
```typescript
<input
  type="text"
  className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:border-accent focus:ring-2 focus:ring-accent-light outline-none transition-all"
  placeholder="Enter text"
/>
```

### Textarea
```typescript
<textarea
  rows={6}
  className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:border-accent focus:ring-2 focus:ring-accent-light outline-none transition-all resize-none"
  placeholder="Enter message"
/>
```

### Select Dropdown
```typescript
<select className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:border-accent focus:ring-2 focus:ring-accent-light outline-none transition-all">
  <option value="">Choose option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

## 🖼️ Images

### Next.js Image (Recommended)
```typescript
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={500}
  height={300}
  className="rounded-lg"
/>
```

### Fill Container
```typescript
<div className="relative h-96 rounded-lg overflow-hidden">
  <Image
    src="/images/photo.jpg"
    alt="Description"
    fill
    className="object-cover"
  />
</div>
```

## 🎭 Animations

### Hover Scale
```typescript
<div className="hover:scale-105 transition-transform duration-300">
  Content
</div>
```

### Fade In
```typescript
<div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
  Content
</div>
```

### Slide Up
```typescript
<div className="translate-y-4 hover:translate-y-0 transition-transform duration-300">
  Content
</div>
```

## 📊 Statistics Display

```typescript
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="card bg-primary text-white text-center">
    <div className="text-4xl font-bold text-accent">10+</div>
    <p className="mt-2">Years Experience</p>
  </div>
  <div className="card bg-accent text-white text-center">
    <div className="text-4xl font-bold">500+</div>
    <p className="mt-2">Happy Students</p>
  </div>
</div>
```

## 🔔 Alert Messages

### Success Alert
```typescript
<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
  Success message here!
</div>
```

### Error Alert
```typescript
<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
  Error message here!
</div>
```

### Info Alert
```typescript
<div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg">
  Info message here!
</div>
```

## 📱 Icons

### Using React Icons
```typescript
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

<FiMail className="text-2xl text-accent" />
<FiPhone className="text-xl text-primary" />
<FiMapPin size={24} className="text-accent" />
```

### Icon with Text
```typescript
<div className="flex items-center gap-2">
  <FiMail className="text-accent" />
  <span>matmaro.edu@gmail.com</span>
</div>
```

## 🎨 Custom Sections

### Feature Section
```typescript
<section className="section bg-neutral-light">
  <div className="container-custom">
    <h2 className="text-center mb-12">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="card text-center">
          <div className="text-5xl text-accent mb-4">{feature.icon}</div>
          <h3 className="text-xl mb-2">{feature.title}</h3>
          <p className="text-neutral-dark">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### CTA Section
```typescript
<section className="section bg-gradient-to-r from-accent to-accent-dark text-white">
  <div className="container-custom text-center">
    <h2 className="text-white mb-4">Ready to Start?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Contact me today and begin your English learning journey
    </p>
    <Link href="/kontakt" className="bg-white text-accent hover:bg-neutral-light font-semibold py-4 px-8 rounded-lg inline-block text-lg">
      Get in Touch
    </Link>
  </div>
</section>
```

### Testimonials
```typescript
<section className="section">
  <div className="container-custom">
    <h2 className="text-center mb-12">Student Reviews</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="card">
          <p className="text-neutral-dark italic mb-4">
            "{testimonial.text}"
          </p>
          <div className="border-t border-neutral-gray pt-4">
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

## 🗺️ Google Maps Customization

### Change Map Location
Replace in `app/kontakt/page.tsx`:

```typescript
// Find this in the iframe src:
!3d52.2297755  // Latitude
!2d21.0122239  // Longitude

// Replace with your coordinates
```

### Get Coordinates
1. Go to Google Maps
2. Right-click on your location
3. Click the coordinates to copy them
4. Use in the map embed URL

## 📱 Social Media Links

### Add to Footer
```typescript
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'

<div className="flex gap-4">
  <a href="https://facebook.com/yourpage" className="text-accent hover:text-accent-light transition-colors">
    <FiFacebook size={24} />
  </a>
  <a href="https://instagram.com/yourpage" className="text-accent hover:text-accent-light transition-colors">
    <FiInstagram size={24} />
  </a>
  <a href="https://linkedin.com/in/yourpage" className="text-accent hover:text-accent-light transition-colors">
    <FiLinkedin size={24} />
  </a>
</div>
```

## 💡 Tips

1. **Use consistent spacing**: Always use Tailwind's spacing scale (4, 6, 8, 12, etc.)
2. **Mobile first**: Design for mobile, then add md: and lg: breakpoints
3. **Reuse components**: Create components for repeated elements
4. **Use semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
5. **Keep it simple**: Don't overcomplicate the design

---

**Happy coding!** 🎨
