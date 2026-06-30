const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

const directoriesToScan = [
    path.join(process.cwd(), 'app'),
    path.join(process.cwd(), 'components')
];

let files = [];
directoriesToScan.forEach(dir => {
    if (fs.existsSync(dir)) {
        files = files.concat(getAllFiles(dir));
    }
});

let count = 0;
for (const filePath of files) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    if (content.match(/href="https:\/\/catalyr\.com([^"]*)"/g)) {
        content = content.replace(/href="https:\/\/catalyr\.com([^"]*)"/g, 'href={`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}$1`}');
        modified = true;
    }

    if (content.match(/new URL\("https:\/\/catalyr\.com([^"]*)"\)/g)) {
        content = content.replace(/new URL\("https:\/\/catalyr\.com([^"]*)"\)/g, 'new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}$1`)');
        modified = true;
    }

    if (content.match(/:\s*"https:\/\/catalyr\.com([^"]*)"/g)) {
        content = content.replace(/:\s*"https:\/\/catalyr\.com([^"]*)"/g, ': `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}$1`');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        count++;
    }
}
console.log(`Replaced all catalyr.com URLs in ${count} files.`);
