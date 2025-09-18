const fs = require('fs');
const path = require('path');

// Simple JS minification
function buildJS() {
  const jsFile = 'public/js/main.js';
  
  if (fs.existsSync(jsFile)) {
    const content = fs.readFileSync(jsFile, 'utf8');
    
    // Simple minification: remove comments and excessive whitespace
    const minified = content
      .replace(/\/\/.*$/gm, '')
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/;\s/g, ';')
      .replace(/\{\s/g, '{')
      .replace(/\s\}/g, '}')
      .trim();
    
    // Ensure dist directory exists
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist', { recursive: true });
    }
    
    if (!fs.existsSync('dist/js')) {
      fs.mkdirSync('dist/js', { recursive: true });
    }
    
    fs.writeFileSync('dist/js/main.min.js', minified);
    console.log('✅ JavaScript built successfully');
  }
}

buildJS();