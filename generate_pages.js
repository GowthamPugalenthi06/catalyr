const fs = require('fs');

function processFile(source, dest, name, lowercaseName) {
  let content = fs.readFileSync(source, 'utf-8');
  
  // Replace component name
  content = content.replace(/SaasPage/g, `${name}Page`);
  
  // Replace title and metadata references (if applicable)
  content = content.replace(/SaaS/g, name);
  content = content.replace(/saas/g, lowercaseName);
  content = content.replace(/SAAS/g, name.toUpperCase());

  fs.writeFileSync(dest, content);
}

// pages
const pages = [
  { name: 'Healthcare', lower: 'healthcare' },
  { name: 'Edtech', lower: 'edtech' }
];

pages.forEach(p => {
  // component
  processFile(
    'components/sections/SaasPage.tsx', 
    `components/sections/${p.name}Page.tsx`,
    p.name,
    p.lower
  );
  
  // page route
  fs.mkdirSync(`app/${p.lower}`, { recursive: true });
  let routeContent = fs.readFileSync('app/saas/page.tsx', 'utf-8');
  routeContent = routeContent.replace(/SaasPage/g, `${p.name}Page`);
  routeContent = routeContent.replace(/SaasRoute/g, `${p.name}Route`);
  routeContent = routeContent.replace(/SaaS/g, p.name);
  routeContent = routeContent.replace(/\/saas/g, `/${p.lower}`);
  routeContent = routeContent.replace(/copySaasAssets\(\);/g, '');
  routeContent = routeContent.replace(/import \{ copySaasAssets \} from "@\/lib\/copySaasAssets";\n/g, '');
  fs.writeFileSync(`app/${p.lower}/page.tsx`, routeContent);
});

console.log("Done");
