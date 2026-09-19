const fs = require('fs');
let html = fs.readFileSync('index-portfolio.html', 'utf8');
const injection = '<style> *[style*="opacity: 0"], *[style*="opacity:0"] { opacity: 1 !important; transform: none !important; transition: opacity 0.8s ease-out, transform 0.8s ease-out; } </style>';
html = html.replace('</head>', injection + '</head>');
// Also remove Next.js scripts to prevent hydration errors from blocking rendering or messing with our styles
html = html.replace(/<script src="https:\/\/porfolio-kahfi\.vercel\.app\/_next.*?<\/script>/g, '');
fs.writeFileSync('index-portfolio.html', html);
console.log('Fixed index-portfolio.html');
