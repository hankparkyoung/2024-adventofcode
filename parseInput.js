import { readFile } from 'fs/promises';

export const parseInput = async (filePath, parser) => {
  try {
    const file = await readFile(filePath, 'utf-8');
    return parser(file);
  } catch (err) {
    console.error("Failed to read file:", err);
  }
}
