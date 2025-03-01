import { parseInput } from './parseInput.js';

const exampleFile = `
3   4
4   3
2   5
1   3
3   9
3   3
`;
const puzzleFilePath = './inputs/day01.txt';

const parser = input => {
  const numberList = [...input].filter(t => t !== '\n' && t !== ' ');
  const listOne = [];
  const listTwo = [];
  numberList.forEach((num, index) => {
    index % 2 === 0 
      ? listOne.push(num)
      : listTwo.push(num)
  });
  return {
    1: listOne,
    2: listTwo,
  }
};

const exampleInput = parser(exampleFile);
const puzzleInput = await parseInput(puzzleFilePath, parser);

console.log(exampleInput);
console.log(puzzleInput);