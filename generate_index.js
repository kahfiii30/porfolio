const fs = require('fs');

fetch('https://porfolio-kahfi.vercel.app/')
  .then(res => res.text())
  .then(html => {
    // Replace all relative URLs with absolute URLs to vercel app
    let fixedHtml = html
      .replace(/href="\//g, 'href="https://porfolio-kahfi.vercel.app/')
      .replace(/src="\//g, 'src="https://porfolio-kahfi.vercel.app/')
      .replace(/srcset="\//g, 'srcset="https://porfolio-kahfi.vercel.app/')
      .replace(/url\(\//g, 'url(https://porfolio-kahfi.vercel.app/');

    // Strip out all Next.js scripts to prevent hydration errors or partial hydration
    fixedHtml = fixedHtml.replace(/<script src="https:\/\/porfolio-kahfi\.vercel\.app\/_next.*?<\/script>/g, '');

    // Inject our custom IntersectionObserver script
    const scriptInjection = `
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const elements = document.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'none';
                        entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -50px 0px' });
            
            elements.forEach(el => {
                // Ignore the mobile menu overlay which should stay hidden
                if (!el.className.includes('fixed inset-0')) {
                    observer.observe(el);
                }
            });
            
            // Immediately reveal elements that are already in the viewport
            setTimeout(() => {
                elements.forEach(el => {
                    if (!el.className.includes('fixed inset-0')) {
                        const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight) {
                            el.style.opacity = '1';
                            el.style.transform = 'none';
                            el.style.transition = 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
                        }
                    }
                });
            }, 100);
        });
    </script>
    `;
    
    fixedHtml = fixedHtml.replace('</body>', scriptInjection + '</body>');

    fs.writeFileSync('index-portfolio.html', fixedHtml);
    console.log('Successfully generated index-portfolio.html');
  })
  .catch(err => console.error(err));
