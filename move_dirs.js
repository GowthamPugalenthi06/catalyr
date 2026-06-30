const fs = require('fs');
const path = require('path');

const basePath = path.join('/home/gowtham/Downloads/next_version/app');

const dirs = [
  'industries', 'services', 'work', 'careers', 'contact', 'insights', 'partners', 'about'
];

dirs.forEach(dir => {
  const dirPath = path.join(basePath, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

const moves = [
  { from: 'about-us', to: 'about' },
  { from: 'career', to: 'careers' },
  { from: 'contact-us', to: 'contact' },
  { from: 'cases', to: 'work' },
  { from: 'saas', to: 'industries/saas' },
  { from: 'healthcare', to: 'industries/healthcare' },
  { from: 'edtech', to: 'industries/edtech' }
];

moves.forEach(move => {
  const fromPath = path.join(basePath, move.from);
  const toPath = path.join(basePath, move.to);
  if (fs.existsSync(fromPath)) {
    if (move.to.includes('/')) {
        const destDir = path.dirname(toPath);
        if(!fs.existsSync(destDir)) fs.mkdirSync(destDir, {recursive: true});
        // move entirely
        fs.renameSync(fromPath, toPath);
    } else {
        // move contents
        const files = fs.readdirSync(fromPath);
        files.forEach(file => {
          fs.renameSync(path.join(fromPath, file), path.join(toPath, file));
        });
    }
    console.log(`Moved ${move.from} to ${move.to}`);
  }
});
