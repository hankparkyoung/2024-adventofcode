import { readFile } from 'fs/promises';

const readInputFromFile = async (filePath) => {
  try {
    const data = await readFile(filePath, 'utf-8');
    return data;
  } catch (err) {
    console.error("Failed to read file:", err);
  }
}

const rawInput = await readInputFromFile('./inputs/day01.txt');

console.log(rawInput);