const fs = require('fs');
const path = require('path');

// Simple CSS minification and combination
function buildCSS() {
  const cssFiles = [
    'public/css/design-system.css',
    'public/css/main.css'
  ];
  
  let combinedCSS = '';
  
  cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      // Simple minification: remove comments and excessive whitespace
      const minified = content
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/;\s/g, ';')
        .replace(/\{\s/g, '{')
        .replace(/\s\}/g, '}')
        .trim();
      combinedCSS += minified + '\n';
    }
  });
  
  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }
  
  if (!fs.existsSync('dist/css')) {
    fs.mkdirSync('dist/css', { recursive: true });
  }
  
  fs.writeFileSync('dist/css/styles.min.css', combinedCSS);
  console.log('✅ CSS built successfully');
}

buildCSS();