const fs = require('fs');

try {
  let html = fs.readFileSync('services/index.html', 'utf-8');

  // Find <div id="app">...</div>
  const appStart = html.indexOf('<div id="app"');
  if (appStart === -1) {
    console.error('Could not find <div id="app"');
    process.exit(1);
  }

  // Extract from <div id="app"> up to but not including <footer
  const footerIndex = html.indexOf('<footer', appStart);
  let appHtml = html.substring(appStart, footerIndex);

  // Remove header
  appHtml = appHtml.replace(/<header[\s\S]*?<\/header>/gi, '');

  // Remove mobile menu wrap
  appHtml = appHtml.replace(/<div class="mobile_menu_wrap"[\s\S]*?<\/div>\s*<\/div>/gi, '');

  // Remove modals like #showreel
  appHtml = appHtml.replace(/<div id="showreel"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi, '');

  // Remove script and style tags
  appHtml = appHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  appHtml = appHtml.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // Remove cursor wrap
  appHtml = appHtml.replace(/<div class="cursor_wrap"[\s\S]*?<\/div>/gi, '');
  
  // Remove gam
  appHtml = appHtml.replace(/<div class="gam"><\/div>/gi, '');

  // Basic HTML to JSX conversions
  appHtml = appHtml.replace(/ class=/g, ' className=');
  appHtml = appHtml.replace(/ for=/g, ' htmlFor=');
  appHtml = appHtml.replace(/ tabindex=/g, ' tabIndex=');
  appHtml = appHtml.replace(/ autocomplete=/g, ' autoComplete=');
  appHtml = appHtml.replace(/ maxlength=/g, ' maxLength=');
  appHtml = appHtml.replace(/ readonly=/g, ' readOnly=');
  appHtml = appHtml.replace(/ viewbox=/g, ' viewBox=');
  appHtml = appHtml.replace(/ stroke-width=/g, ' strokeWidth=');
  appHtml = appHtml.replace(/ stroke-linecap=/g, ' strokeLinecap=');
  appHtml = appHtml.replace(/ stroke-linejoin=/g, ' strokeLinejoin=');
  appHtml = appHtml.replace(/ fill-rule=/g, ' fillRule=');
  appHtml = appHtml.replace(/ clip-rule=/g, ' clipRule=');
  appHtml = appHtml.replace(/ allowfullscreen>/g, ' allowFullScreen>');

  // Fix unclosed tags
  appHtml = appHtml.replace(/<img([^>]+?)(?<!\/)>/g, '<img$1 />');
  appHtml = appHtml.replace(/<input([^>]+?)(?<!\/)>/g, '<input$1 />');
  appHtml = appHtml.replace(/<br([^>]*?)>/g, '<br$1 />');
  appHtml = appHtml.replace(/<hr([^>]*?)>/g, '<hr$1 />');
  appHtml = appHtml.replace(/<source([^>]+?)(?<!\/)>/g, '<source$1 />');

  // Fix styles
  appHtml = appHtml.replace(/style="([^"]*)"/g, (match, p1) => {
    let styleStr = p1.replace(/aspect-ratio:/g, 'aspectRatio:').replace(/;/g, '');
    let parts = styleStr.split(':');
    if (parts.length === 2) {
      return `style={{ ${parts[0].trim()}: "${parts[1].trim()}" }}`;
    }
    return 'style={{}}';
  });

  // Remove comments
  appHtml = appHtml.replace(/<!--[\s\S]*?-->/g, '');

  let finalComponent = `export default function ServicesPage() {
  return (
    <>
${appHtml}
    </div>
    </>
  );
}
`;
  
  fs.writeFileSync('components/sections/ServicesPage.tsx', finalComponent, 'utf-8');
  console.log('Successfully generated ServicesPage.tsx');

} catch (e) {
  console.error('Error:', e);
}
