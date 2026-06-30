import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const settingsFilePath = path.join(process.cwd(), 'data', 'settings.json');

export async function GET() {
  try {
    if (!fs.existsSync(settingsFilePath)) {
      return NextResponse.json({ error: "Settings not found" }, { status: 404 });
    }
    const data = fs.readFileSync(settingsFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: "Failed to read settings" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    fs.writeFileSync(settingsFilePath, JSON.stringify(data, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 });
  }
}
