# Luxe Nails - Modern Nail Salon Website

A modern, responsive website for a nail salon business with a black and pink theme, featuring an intuitive booking system and seamless navigation.

## Features

✨ **Modern Design**
- Black-based theme with pink accents
- Clean and minimalist layout
- Smooth animations and transitions
- Fully responsive design

📅 **Easy Booking System**
- Step-by-step booking interface
- Service selection with pricing
- Technician selection
- Date and time picker
- Customer information form

📸 **Interactive Gallery**
- Filterable nail art portfolio
- Lightbox image viewer
- Category-based organization

📱 **Mobile-First Design**
- Responsive navigation with mobile menu
- Touch-friendly interface
- Optimized for all screen sizes

## Technology Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nail-salon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Build for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
nail-salon/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   └── FAQ.tsx          # Frequently asked questions
│   ├── pages/
│   │   ├── HomePage.tsx     # Landing page
│   │   ├── ServicesPage.tsx # Services and pricing
│   │   ├── BookingPage.tsx  # Booking interface
│   │   ├── GalleryPage.tsx  # Portfolio gallery
│   │   ├── AboutPage.tsx    # About us page
│   │   └── ContactPage.tsx  # Contact information
│   ├── App.tsx              # Main app component
│   └── index.css            # Global styles
├── public/
└── package.json
```

## Key Features by Page

### Home Page
- Hero section with call-to-action
- Feature highlights
- Popular services preview
- Gallery preview
- Testimonials section
- FAQ section

### Services Page
- Comprehensive service list
- Organized by categories
- Pricing and duration information
- Service descriptions

### Booking Page
- 4-step booking process
- Progress indicator
- Real-time form validation
- Booking summary

### Gallery Page
- Category filters
- Grid layout
- Lightbox viewer
- Hover effects

### About Page
- Company story
- Team members
- Core values
- Statistics

### Contact Page
- Contact form
- Business information
- Business hours
- Social media links
- Embedded map

## Customization

### Colors
Edit the custom colors in `tailwind.config.js`:
```javascript
colors: {
  'nail-black': '#1C2526',
  'nail-pink': '#FF69B4',
  'nail-pink-light': '#F5A9B8',
}
```

### Business Information
Update contact details, hours, and location in:
- `components/Footer.tsx`
- `pages/ContactPage.tsx`
- `components/Navbar.tsx`

### Services and Pricing
Modify services in `pages/ServicesPage.tsx`

## Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is designed for a nail salon business. All rights reserved.

## Support

For support or questions, contact: info@luxenails.com
