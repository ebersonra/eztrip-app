# EzTrip - Modern Travel Planning Application

🌍 A modern, responsive travel planning application built with Node.js, Express, and EJS using MVC architecture. Features dark theme support, beautiful UI/UX design, and optimized for Netlify deployment.

![EzTrip Preview](https://via.placeholder.com/800x400/3b82f6/ffffff?text=EzTrip+-+Modern+Travel+Planning)

## ✨ Features

- **🎨 Modern Design System**: Beautiful, consistent UI with CSS custom properties
- **🌙 Dark Theme Support**: Toggle between light and dark modes with smooth transitions
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Optimized CSS and JavaScript with minification
- **🔒 Security**: Helmet.js for security headers and best practices
- **🚀 Netlify Ready**: Configured for easy deployment to Netlify
- **🔄 CI/CD**: GitHub Actions workflow for automated deployment
- **♿ Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **🎯 SEO Optimized**: Meta tags, Open Graph, and semantic structure

## 🏗️ Architecture

### MVC Structure
```
├── controllers/          # Request handlers and business logic
├── models/              # Data models and database interactions
├── views/               # EJS templates and layouts
│   ├── layouts/         # Page layouts
│   ├── partials/        # Reusable components
│   └── pages/           # Individual pages
├── public/              # Static assets
│   ├── css/             # Stylesheets
│   ├── js/              # Client-side JavaScript
│   └── images/          # Images and media
├── routes/              # Express route definitions
├── middleware/          # Custom middleware
└── scripts/             # Build and utility scripts
```

### Technology Stack
- **Backend**: Node.js, Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: CSS3 with custom properties, responsive design
- **JavaScript**: Vanilla ES6+ with modern features
- **Security**: Helmet.js, CORS
- **Deployment**: Netlify with GitHub Actions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/ebersonra/eztrip-app.git
cd eztrip-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run build      # Build CSS and JavaScript
npm run build:netlify  # Build for Netlify deployment
npm test           # Run tests (placeholder)
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) - Action buttons, links
- **Secondary**: Green (#10b981) - Success states, secondary actions  
- **Accent**: Amber (#f59e0b) - Highlights, warnings
- **Neutrals**: Gray scale for text and backgrounds

### Typography
- **Primary Font**: Inter (Sans-serif)
- **Secondary Font**: Playfair Display (Serif)
- **Scale**: 12px to 60px with consistent rhythm

### Components
- Buttons (Primary, Secondary, Outline, Ghost)
- Cards (Trip cards, info cards)
- Forms (Inputs, selects, textareas)
- Navigation (Header, footer, mobile menu)
- Theme toggle functionality

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: 1024px - 1280px
- **Large**: > 1280px

## 🌙 Dark Theme

The application supports both light and dark themes with:
- Automatic system preference detection
- Manual toggle control
- Smooth transitions between themes
- Persistent user preference storage

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**: 
   - Build command: `npm run build:netlify`
   - Publish directory: `dist`
3. **Environment Variables**: Configure if needed
4. **Deploy**: Automatic deployment on push to main branch

### GitHub Actions
The project includes a complete CI/CD pipeline:
- Automated testing and linting
- Build optimization
- Netlify deployment
- Lighthouse performance audits

### Manual Deployment
```bash
# Build for production
npm run build:netlify

# Deploy dist folder to your hosting provider
```

## 🔧 Configuration

### Netlify Configuration
See `netlify.toml` for:
- Build settings
- Redirect rules  
- Security headers
- Caching policies

### Environment Variables
Create a `.env` file for local development:
```env
NODE_ENV=development
PORT=3000
```

## 🎯 Performance

- **Lighthouse Scores**: Targeting 90+ in all categories
- **CSS**: Minified and combined
- **JavaScript**: Minified with tree shaking
- **Images**: Optimized with lazy loading
- **Caching**: Strategic cache headers

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Input sanitization
- XSS protection
- Content Security Policy

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**ebersonra**
- GitHub: [@ebersonra](https://github.com/ebersonra)

## 🙏 Acknowledgments

- Icons from various emoji sets
- Fonts from Google Fonts
- Inspiration from modern travel websites
- Community feedback and contributions

---

Built with ❤️ for travelers around the world