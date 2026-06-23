import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const baseDir = path.join(process.cwd());
    const srcComp = path.join(baseDir, 'components/sections/SaasPage.tsx');
    const srcRoute = path.join(baseDir, 'app/saas/page.tsx');

    const pages = [
      { name: 'Healthcare', path: 'healthcare', exact: 'Healthcare', lower: 'healthcare', upper: 'HEALTHCARE' },
      { name: 'Fintech', path: 'fintech', exact: 'Fintech', lower: 'fintech', upper: 'FINTECH' },
      { name: 'Edtech', path: 'edtech', exact: 'Edtech', lower: 'edtech', upper: 'EDTECH' },
    ];

    const compContent = fs.readFileSync(srcComp, 'utf8');
    const routeContent = fs.readFileSync(srcRoute, 'utf8');

    for (const p of pages) {
      let newComp = compContent.replace(/SaasPage/g, `${p.name}Page`);
      newComp = newComp.replace(/SaaS/g, p.exact);
      newComp = newComp.replace(/saas/g, p.lower);
      newComp = newComp.replace(/SAAS/g, p.upper);

      const compPath = path.join(baseDir, `components/sections/${p.name}Page.tsx`);
      fs.writeFileSync(compPath, newComp, 'utf8');

      const routeDir = path.join(baseDir, `app/${p.path}`);
      fs.mkdirSync(routeDir, { recursive: true });

      let newRoute = routeContent.replace(/SaasPage/g, `${p.name}Page`);
      newRoute = newRoute.replace(/SaasRoute/g, `${p.name}Route`);
      newRoute = newRoute.replace(/saas/g, p.lower);
      newRoute = newRoute.replace(/SaaS/g, p.exact);
      newRoute = newRoute.split('\n').filter(line => !line.includes('copySaasAssets')).join('\n');

      const routePath = path.join(routeDir, 'page.tsx');
      fs.writeFileSync(routePath, newRoute, 'utf8');
    }

    return NextResponse.json({ success: true, message: "Pages generated!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
