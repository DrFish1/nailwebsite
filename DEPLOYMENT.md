# Deployment Guide - Luxe Nails Website

This guide covers how to deploy your nail salon website to popular hosting platforms.

## 🚀 Quick Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Build the project: `npm run build`
3. Deploy: `vercel --prod`
4. Follow the prompts to connect your GitHub repo

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=build
   ```

### GitHub Pages
1. Install gh-pages: `npm install -g gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/nail-salon",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📱 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🔧 Environment Setup

The website works out of the box with no additional configuration needed.

### Custom Domain Setup

For custom domains, update the business information in:
- `components/Footer.tsx`
- `pages/ContactPage.tsx`
- `components/Navbar.tsx`

### SEO Optimization

Update the following files for SEO:
- `public/index.html` - Meta tags, title
- `public/manifest.json` - App metadata
- Add Google Analytics tracking code if needed

## 🛠 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'nail-black': '#1C2526',      // Main black theme
  'nail-pink': '#FF69B4',       // Primary pink
  'nail-pink-light': '#F5A9B8', // Light pink accent
}
```

### Business Information
- Contact details: `pages/ContactPage.tsx`
- Business hours: `components/Footer.tsx`
- Services & pricing: `pages/ServicesPage.tsx`
- Team members: `pages/AboutPage.tsx`

### Images
Replace placeholder images with real salon photos:
- Hero section: Update `pages/HomePage.tsx`
- Gallery: Update `pages/GalleryPage.tsx`
- Team photos: Update `pages/AboutPage.tsx`

## 📞 Support

For deployment issues or customization help:
- Check the main README.md
- Review React/Create React App documentation
- Contact: info@luxenails.com

## ⚡ Performance Tips

- Optimize images before adding them
- Use WebP format for better compression
- Enable CDN for faster loading
- Monitor Core Web Vitals

Your nail salon website is ready to go live! 🎉