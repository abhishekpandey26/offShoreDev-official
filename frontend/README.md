# Offshore Dev Labs - Corporate Website

A professional, modern corporate website for Offshore Dev Labs Private Limited - a leading software and app development agency.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and micro-interactions
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **SEO Optimized**: Comprehensive meta tags and semantic HTML structure
- **Multi-Page**: Home and dedicated Services page with detailed service information
- **Interactive Components**:
  - Sticky navigation with smooth scroll
  - Hero section with gradient background and floating cards
  - Services showcase with icons and features
  - Portfolio section with project cards
  - Testimonials carousel
  - Contact form with validation
  - WhatsApp floating button
  - Professional footer with social links

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **TailwindCSS 3** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Vite** - Fast build tool and dev server

## 📦 Installation

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173/`

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with mobile menu
│   │   ├── Footer.jsx          # Footer with company info
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Services.jsx        # Services overview
│   │   ├── Portfolio.jsx       # Portfolio showcase
│   │   ├── WhyUs.jsx           # Why choose us section
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   ├── ContactForm.jsx     # Contact form
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp button
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   └── ServicesPage.jsx    # Detailed services page
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template with SEO meta tags
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Dependencies
```

## 🎨 Design Features

### Color Scheme
- Primary Blue: `#0066ff`
- Secondary Blue: `#0052cc`
- Clean white backgrounds with subtle gradients

### Typography
- Font Family: Inter (Google Fonts)
- Professional, modern typeface

### Animations
- Smooth scroll behavior
- Hover effects on cards and buttons
- Floating animations
- Slide-in animations
- Fade-in effects

## 📄 Pages

### Home Page (`/`)
Includes all main sections:
- Hero with CTA
- About Us
- Services Overview
- Portfolio
- Why Choose Us
- Testimonials
- Contact Form

### Services Page (`/services`)
Detailed information about each service:
- Web Development
- Android App Development
- React Native Development
- UI/UX Design
- Custom Software Solutions

## 🔧 Customization

### Update Company Information

1. **Contact Details** - Edit in `Footer.jsx` and `ContactForm.jsx`
2. **WhatsApp Number** - Update in `WhatsAppButton.jsx`
3. **Social Media Links** - Modify in `Footer.jsx`
4. **Company Stats** - Change in `Hero.jsx` and `About.jsx`

### Add/Modify Services

Edit the services array in:
- `src/components/Services.jsx` (homepage)
- `src/pages/ServicesPage.jsx` (detailed page)

### Update Portfolio Projects

Modify the projects array in `src/components/Portfolio.jsx`

### Change Testimonials

Update the testimonials array in `src/components/Testimonials.jsx`

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📱 Contact Information

- **Email**: info@offshoredevlabs.com
- **Phone**: +91 98765 43210
- **Address**: 123 Tech Park, Sector 5, Bangalore, Karnataka 560001, India

## 🌟 Key Features Implemented

✅ Responsive navigation with mobile hamburger menu  
✅ Smooth scroll to sections  
✅ Hero section with gradient background and stats  
✅ Service cards with icons and hover effects  
✅ Portfolio grid with project details  
✅ Rotating testimonials carousel  
✅ Contact form with validation  
✅ WhatsApp floating button  
✅ SEO-optimized meta tags  
✅ Professional footer with social links  
✅ Sticky navbar on scroll  
✅ Custom animations and transitions  

## 📝 License

© 2026 Offshore Dev Labs Private Limited. All rights reserved.
