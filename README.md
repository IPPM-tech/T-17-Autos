# T-17 Autos Website

## Overview
Professional integrated showroom website for T-17 Autos, featuring:
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Vehicle Filtering System**: Browse and filter vehicles by brand
- **Services Section**: Complete automotive maintenance services
- **Contact & Inquiry System**: Professional inquiry form for customers
- **Brand Identity**: Custom T-17 color scheme (White, Blue, Red on Velvet Black)
- **Lightweight Stack**: Pure HTML5, CSS3, and Vanilla JavaScript

## Technology Stack
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: Interactive filtering and form handling (no dependencies)
- **GitHub Pages**: Free hosting and deployment

## Website Structure

```
t-17-autos/
├── index.html           # Home/Showroom page
├── services.html        # Services & maintenance page
├── contact.html         # Contact & inquiry page
├── css/
│   └── styles.css       # All styling (brand colors, responsive design)
├── js/
│   └── script.js        # Interactive filtering and utilities
├── images/
│   └── logo/
│       ├── t17-logo.png      # T-17 favicon and brand logo
│       └── ippm-crest.png    # IPPM webmaster logo
└── README.md            # Documentation
```

## Features

### 1. **Vehicle Showroom**
- Interactive vehicle grid with brand filtering
- Filter buttons for: All Vehicles, Toyota, Honda, BMW, Mercedes, Ford
- Vehicle cards with details, pricing, and inquiry buttons
- Smooth animations and hover effects

### 2. **Services Section**
- Comprehensive list of automotive services
- Service categories with descriptions
- Easy booking access from each service card

### 3. **Contact & Inquiry System**
- Professional inquiry form
- Multiple inquiry types (Vehicle, Service, General)
- Contact information placeholders (ready for T-17 details)
- Client feedback confirmation

### 4. **Brand Identity**
- **Colors**: 
  - White (#FFFFFF) - Primary
  - Blue (#002E7E) - Accent
  - Red (#D32F2F) - Danger/Highlight
  - Velvet Black (#1A1A1A) - Background
- **Favicon**: T-17 Logo (not IPPM)
- **Footer**: Minimal IPPM webmaster attribution

### 5. **Responsive Design**
- Mobile-first approach
- Tablet optimization (768px breakpoint)
- Mobile-specific styles (480px breakpoint)
- Flexible grid layouts

## Key JavaScript Features

### Vehicle Filtering
```javascript
// Click filter button → displays only matching brand vehicles
// Smooth fade-in animations for filtered results
// Active button styling to show current filter
```

### Navigation Highlighting
```javascript
// Automatically highlights current page in navigation
// Updates on page load and navigation
```

## Customization Guide

### Adding Vehicles
Edit `index.html` - add new `.vehicle-card` elements:
```html
<div class="vehicle-card" data-brand="brand-name">
  <div class="vehicle-image">🚗 Vehicle Name</div>
  <h3>Vehicle Full Name Year</h3>
  <p class="vehicle-brand">Brand: Brand Name</p>
  <p class="vehicle-price">$Price</p>
  <p class="vehicle-desc">Description</p>
  <button class="vehicle-btn" onclick="document.location.href='contact.html#inquiry';">Inquire</button>
</div>
```

### Updating Contact Information
Edit `contact.html` - update the contact info cards:
```html
<div class="contact-info-card">
  <h3>📞 Phone</h3>
  <p>Your phone number here</p>
</div>
```

### Customizing Brand Colors
Edit `css/styles.css` - update CSS variables at the top:
```css
:root {
  --primary-color: #FFFFFF;        /* White */
  --accent-color: #002E7E;         /* Blue */
  --danger-color: #D32F2F;         /* Red */
  --bg-color: #1A1A1A;             /* Velvet Black */
}
```

## Performance
- **Page Load**: < 1 second (lightweight, no external dependencies)
- **Minified CSS**: ~12KB
- **Minified JS**: ~2KB
- **Total Assets**: Under 1MB (including logos)

## SEO & Accessibility
- Semantic HTML5 structure
- Meta descriptions for each page
- ARIA labels for navigation
- Keyboard navigation support
- Color contrast compliance
- Mobile-friendly responsive design

## Webmaster Information
**Institute of Public Peace and Management (IPPM)**
- **Tech Unit**: Website Development
- **Website**: https://ippm.org.ng
- **Phone**: +234 705 252 6342
- **Logo**: IPPM Heraldic Crest (footer attribution only)

## Future Enhancements
- Add T-17 Autos confirmed contact details
- Implement actual form submission backend
- Add customer testimonials section
- Vehicle inventory management system
- Online booking calendar integration
- Multi-language support

## Deployment
This website is hosted on GitHub Pages:
1. Push changes to the `main` branch
2. Automatic deployment to GitHub Pages
3. Access via: `https://IPPM-tech.github.io/T-17-Autos/`
4. Custom domain setup: Update DNS records when domain is registered

## License
© 2026 T-17 Autos. All rights reserved.

---

*Professional automotive solutions website built with HTML5, CSS3, and Vanilla JavaScript.*