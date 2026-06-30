const fs = require('fs');

const files = [
    "components/sections/SaasPage.tsx",
    "components/sections/HealthcarePage.tsx",
    "components/sections/EdtechPage.tsx"
];

for (const f of files) {
    if (!fs.existsSync(f)) continue;
    let content = fs.readFileSync(f, 'utf-8');
    
    // Replace all <video ... src="/media/..." ...></video> with <img src="/work/branding.png" ... />
    // We want to keep the className and style if possible, but they are all very similar.
    // The safest is to match the <video tag up to closing > and the </video> and replace with img.
    // We skip review videos.
    
    const regex = /<video[^>]*src=["']\/?media\/(?!.*review)[^>]*>.*?<\/video>/gi;
    const replacement = `<img className="fullw radius-12" src="/work/branding.png" loading="lazy" style={{ aspectRatio: 1.33, objectFit: "cover" }} />`;
    
    content = content.replace(regex, replacement);
    
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
}
