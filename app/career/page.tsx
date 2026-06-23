import CareerPage from '@/components/sections/CareerPage';
import fs from 'fs';
import path from 'path';

export default function Career() {
  if (process.env.NODE_ENV === 'development') {
    try {
      const srcDirImg = path.join(process.cwd(), 'career', 'images');
      const destDirImg = path.join(process.cwd(), 'public', 'images');
      if (fs.existsSync(srcDirImg)) {
        fs.cpSync(srcDirImg, destDirImg, { recursive: true });
      }

      const srcDirMedia = path.join(process.cwd(), 'career', 'media');
      const destDirMedia = path.join(process.cwd(), 'public', 'media');
      if (fs.existsSync(srcDirMedia)) {
        fs.cpSync(srcDirMedia, destDirMedia, { recursive: true });
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <CareerPage />
    </>
  );
}
