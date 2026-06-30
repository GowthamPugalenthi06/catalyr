const fs = require('fs');
const path = require('path');
const https = require('https');

const dirsToScan = ['components', 'app', 'data'];
const publicImagesDir = path.join(__dirname, 'public', 'images', 'downloaded');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      resolve();
      return;
    }
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Match standard image extensions and unsplash URLs
  const regex = /https:\/\/(images\.unsplash\.com[^"'\s]+|flagcdn\.com[^"'\s]+|[^"'\s]+\.(jpg|jpeg|png|webp|svg|gif))/gi;
  
  let newContent = content;
  const matches = [...new Set(content.match(regex)) || []];
  
  if (matches.length === 0) return;
  
  for (const url of matches) {
    try {
      const urlObj = new URL(url);
      let filename = urlObj.pathname.split('/').pop();
      if (!filename || filename === '') {
        filename = Math.random().toString(36).substring(7) + '.jpg';
      }
      
      // If it's an unsplash URL without extension, add .jpg
      if (url.includes('unsplash.com') && !filename.includes('.')) {
        filename += '.jpg';
      }
      
      const localPath = path.join(publicImagesDir, filename);
      console.log(`Downloading ${url} to ${localPath}`);
      await downloadImage(url, localPath);
      
      const publicPath = `/images/downloaded/${filename}`;
      // Replace globally in this file
      newContent = newContent.split(url).join(publicPath);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err.message);
    }
  }
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.json')) {
      processFilesQueue.push(fullPath);
    }
  }
}

const processFilesQueue = [];
dirsToScan.forEach(dir => scanDir(path.join(__dirname, dir)));

(async () => {
  console.log('Starting image downloads...');
  for (const file of processFilesQueue) {
    await processFile(file);
  }
  console.log("Done downloading and replacing all external images!");
})();
