import fs from 'fs';
import path from 'path';

const root = process.cwd();

export async function getImages() {
  const files = await fs.readdirSync(path.join(root, '/public/img/gallery/'));
  return files.map((filename) => {
    return path.join('/img/gallery/', filename);
  });
}
