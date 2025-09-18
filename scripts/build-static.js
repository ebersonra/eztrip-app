const fs = require('fs');
const path = require('path');
const express = require('express');

// Import controllers and models
const Trip = require('../models/Trip');

// Static site generator for Netlify
function generateStaticSite() {
  const app = express();
  
  // Set up EJS
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
  
  // Create dist directory
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }
  
  // Generate static pages
  const pages = [
    {
      route: '/',
      template: 'pages/home',
      filename: 'index.html',
      data: {
        title: 'EzTrip - Plan Your Perfect Journey',
        featuredTrips: Trip.getFeatured(),
        currentPath: '/'
      }
    },
    {
      route: '/trips',
      template: 'pages/trips',
      filename: 'trips.html',
      data: {
        title: 'All Trips - EzTrip',
        trips: Trip.getAll(),
        currentPath: '/trips'
      }
    },
    {
      route: '/trips/plan',
      template: 'pages/plan',
      filename: 'plan.html',
      data: {
        title: 'Plan Your Trip - EzTrip',
        currentPath: '/trips/plan'
      }
    },
    {
      route: '/about',
      template: 'pages/about',
      filename: 'about.html',
      data: {
        title: 'About Us - EzTrip',
        currentPath: '/about'
      }
    }
  ];
  
  // Generate each page
  pages.forEach(page => {
    try {
      app.render(page.template, page.data, (err, html) => {
        if (err) {
          console.error(`Error rendering ${page.filename}:`, err);
          return;
        }
        
        // Wrap in layout
        const layoutHTML = generateLayout(html, page.data);
        fs.writeFileSync(path.join('dist', page.filename), layoutHTML);
        console.log(`✅ Generated ${page.filename}`);
      });
    } catch (error) {
      console.error(`Error generating ${page.filename}:`, error);
    }
  });
  
  // Copy static assets
  copyStaticAssets();
  
  console.log('✅ Static site generated for Netlify');
}

function generateLayout(content, data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="EzTrip - Plan your perfect journey with modern travel planning tools">
    <meta name="keywords" content="travel, trip planning, vacation, booking, destinations">
    <title>${data.title}</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="/css/styles.min.css">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://eztrip.netlify.app/">
    <meta property="og:title" content="${data.title}">
    <meta property="og:description" content="Plan your perfect journey with EzTrip">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://eztrip.netlify.app/">
    <meta property="twitter:title" content="${data.title}">
    <meta property="twitter:description" content="Plan your perfect journey with EzTrip">
</head>
<body>
    ${generateHeader(data.currentPath)}
    
    <main>
        ${content}
    </main>
    
    ${generateFooter()}
    
    <!-- Scripts -->
    <script src="/js/main.min.js"></script>
</body>
</html>`;
}

function generateHeader(currentPath) {
  return `<header class="header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <a href="/">EzTrip</a>
            </div>
            
            <nav class="nav" role="navigation" aria-label="Main navigation">
                <ul class="nav-menu">
                    <li><a href="/" class="nav-link ${currentPath === '/' ? 'active' : ''}">Home</a></li>
                    <li><a href="/trips.html" class="nav-link ${currentPath.startsWith('/trips') ? 'active' : ''}">Trips</a></li>
                    <li><a href="/plan.html" class="nav-link ${currentPath === '/trips/plan' ? 'active' : ''}">Plan</a></li>
                    <li><a href="/about.html" class="nav-link ${currentPath === '/about' ? 'active' : ''}">About</a></li>
                </ul>
            </nav>
            
            <div class="header-actions">
                <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
                    🌙
                </button>
                <a href="/plan.html" class="btn btn-primary btn-sm">Plan Trip</a>
            </div>
        </div>
    </div>
</header>`;
}

function generateFooter() {
  const currentYear = new Date().getFullYear();
  return `<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <div class="logo mb-4">EzTrip</div>
                <p>Your perfect journey starts here. Discover amazing destinations and plan unforgettable trips with our modern travel platform.</p>
            </div>
            
            <div class="footer-section">
                <h4>Services</h4>
                <ul class="footer-links">
                    <li><a href="/plan.html">Trip Planning</a></li>
                    <li><a href="/trips.html">Search Trips</a></li>
                    <li><a href="/about.html">About Us</a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; ${currentYear} EzTrip. All rights reserved. Built with ❤️ for travelers.</p>
        </div>
    </div>
</footer>`;
}

function copyStaticAssets() {
  // Copy CSS and JS
  const cssSource = 'dist/css/styles.min.css';
  const jsSource = 'dist/js/main.min.js';
  
  if (fs.existsSync(cssSource)) {
    fs.copyFileSync(cssSource, 'dist/css/styles.min.css');
  }
  
  if (fs.existsSync(jsSource)) {
    fs.copyFileSync(jsSource, 'dist/js/main.min.js');
  }
  
  // Create placeholder images
  createPlaceholderImages();
}

function createPlaceholderImages() {
  if (!fs.existsSync('dist/images')) {
    fs.mkdirSync('dist/images', { recursive: true });
  }
  
  // Create simple SVG placeholders
  const placeholderSVG = (width, height, text, color = '#3b82f6') => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dy=".3em">${text}</text>
</svg>`;
  
  const images = [
    { name: 'paris.jpg', width: 400, height: 300, text: 'Paris, France', color: '#f59e0b' },
    { name: 'tokyo.jpg', width: 400, height: 300, text: 'Tokyo, Japan', color: '#ef4444' },
    { name: 'nyc.jpg', width: 400, height: 300, text: 'New York, USA', color: '#10b981' },
    { name: 'rome.jpg', width: 400, height: 300, text: 'Rome, Italy', color: '#8b5cf6' },
    { name: 'london.jpg', width: 400, height: 300, text: 'London, UK', color: '#06b6d4' },
    { name: 'barcelona.jpg', width: 400, height: 300, text: 'Barcelona, Spain', color: '#f97316' }
  ];
  
  images.forEach(img => {
    const svg = placeholderSVG(img.width, img.height, img.text, img.color);
    fs.writeFileSync(`dist/images/${img.name}`, svg);
  });
  
  console.log('✅ Placeholder images created');
}

// Run the generator
generateStaticSite();