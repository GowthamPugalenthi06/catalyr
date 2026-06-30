import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public/images/uploads
    const uploadDir = join(process.cwd(), 'public', 'images', 'uploads');
    
    // Ensure directory exists
    await mkdir(uploadDir, { recursive: true });

    // Use a unique name or the original name. We'll use the original name but sanitize it.
    const fileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
    const filePath = join(uploadDir, fileName);
    
    await writeFile(filePath, buffer);

    return NextResponse.json({ success: true, url: `/images/uploads/${fileName}` });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ success: false, error: "Failed to upload file" }, { status: 500 });
  }
}
