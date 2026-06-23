import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const cwd = process.cwd();
    const headerPath = path.join(cwd, 'components/Header.tsx');
    let header = fs.readFileSync(headerPath, 'utf-8');

    // Replace all `${SVC}/services/` with `/services`
    header = header.replace(/\`\$\{SVC\}\/services\/\`/g, '"/services"');
    
    // Replace all `${SVC}/service/...` with `/services/...`
    header = header.replace(/\`\$\{SVC\}\/service\/([^`]+)\`/g, '"/services/$1"');
    
    // Replace all `${SVC}/ai-development-services/` with `/services/ai-development-services/`
    header = header.replace(/\`\$\{SVC\}\/ai-development-services\/\`/g, '"/services/ai-development-services"');
    
    // Replace all `${SVC}/custom-software-development-company/` with `/services/custom-software-development-company/`
    header = header.replace(/\`\$\{SVC\}\/custom-software-development-company\/\`/g, '"/services/custom-software-development-company"');
    
    // Just in case there is \` ${SVC}/services/\` (like in line 211)
    header = header.replace(/\` \$\{SVC\}\/services\/\`/g, '"/services"');

    fs.writeFileSync(headerPath, header, 'utf-8');

    return NextResponse.json({ success: true, message: 'Header updated' });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}
