export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
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

    let files: string[] = [];
    directoriesToScan.forEach(dir => {
        if (fs.existsSync(dir)) {
            files = files.concat(getAllFiles(dir));
        }
    });

    let count = 0;
    for (const filePath of files) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Replace href="https://catalyr.com/..." with href={`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/...`}
        if (content.match(/href="https:\/\/catalyr\.com([^"]*)"/g)) {
            content = content.replace(/href="https:\/\/catalyr\.com([^"]*)"/g, 'href={`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}$1`}');
            modified = true;
        }

        // Replace metadata URL: new URL("https://catalyr.com") -> new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000")
        if (content.match(/new URL\("https:\/\/catalyr\.com([^"]*)"\)/g)) {
            content = content.replace(/new URL\("https:\/\/catalyr\.com([^"]*)"\)/g, 'new URL(`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}$1`)');
            modified = true;
        }

        // Replace canonical / url in metadata objects: "https://catalyr.com/..." -> `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/...`
        if (content.match(/:\s*"https:\/\/catalyr\.com([^"]*)"/g)) {
            content = content.replace(/:\s*"https:\/\/catalyr\.com([^"]*)"/g, ': `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}$1`');
            modified = true;
        }
        
        // General catch-all for remaining absolute strings in JS (not href=, not new URL)
        if (content.match(/"https:\/\/catalyr\.com([^"]*)"/g)) {
            content = content.replace(/"https:\/\/catalyr\.com([^"]*)"/g, '`${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}$1`');
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content);
            count++;
        }
    }

    return NextResponse.json({ success: true, message: `Replaced all catalyr.com URLs in ${count} files.` });
}
