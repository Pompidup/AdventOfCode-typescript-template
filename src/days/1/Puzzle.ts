import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const input = this.input.split('\n');
    let maxCalories = 0;
    let currentCalories = 0;

    for (let i = 0; i < input.length; i++) {
      const line = input[i];
      if (line !== '') {
        currentCalories += Number(line);
        currentCalories > maxCalories && (maxCalories = currentCalories);
      } else {
        currentCalories = 0;
      }
    }

    return `day 1 solution 1 ${maxCalories.toString()}`;
  }
  public solveSecond(): string {
    const input = this.input.split('\n');
    let currentCalories = 0;
    const totalCalories = [];

    for (let i = 0; i < input.length; i++) {
      const line = input[i];
      if (line !== '') {
        currentCalories += Number(line);
      } else {
        totalCalories.push(currentCalories);
        currentCalories = 0;
      }
    }
    totalCalories.sort((a, b) => b - a);
    const firstThree = totalCalories.slice(0, 3);
    const sum = firstThree.reduce((a, b) => a + b, 0);

    return `day 1 solution 2 ${sum}`;
  }

  public getFirstExpectedResult(): string {
    return 'day 1 solution 1';
  }
  public getSecondExpectedResult(): string {
    return 'day 1 solution 2';
  }
}
