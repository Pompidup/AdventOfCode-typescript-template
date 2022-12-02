import Puzzle from '../../types/AbstractPuzzle';

export default class ConcretePuzzle extends Puzzle {
  public solveFirst(): string {
    const input = this.input.split('\n');

    const points: {
      [key: string]: {
        [key: string]: number;
      };
    } = {
      'X': {
        'P': 1,
        'C': 6,
        'B': 0,
        'A': 3,
      },
      'Y': {
        'P': 2,
        'C': 0,
        'B': 3,
        'A': 6,
      },
      'Z': {
        'P': 3,
        'C': 3,
        'B': 6,
        'A': 0,
      },
    };

    let totalPoints = 0;
    input.forEach(line => {
      const play = line.split(' ');
      totalPoints += points[play[1]]['P'] + points[play[1]][play[0]];
    });
    return `day 1 solution 1 ${totalPoints.toString()}`;
  }

  public getFirstExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 1;
    return 'day 1 solution 1';
  }

  public solveSecond(): string {
    const choiceValue: { [key: string]: number } = {
      'X': 1,
      'Y': 2,
      'Z': 3,
    };
    const issueValue: { [key: string]: number } = {
      'X': 0,
      'Y': 3,
      'Z': 6,
    };

    const matching: { [key: string]: { [key: string]: string } } = {
      'C': {
        'Y': 'Z',
        'Z': 'X',
        'X': 'Y',
      },
      'B': {
        'Y': 'Y',
        'Z': 'Z',
        'X': 'X',
      },
      'A': {
        'Y': 'X',
        'Z': 'Y',
        'X': 'Z',
      },
    };

    const input = this.input.split('\n');
    let totalPoints = 0;
    input.forEach(line => {
      const play = line.split(' ');
      totalPoints += choiceValue[matching[play[0]][play[1]]] + issueValue[play[1]];
    });

    return `day 1 solution 2 ${totalPoints.toString()}`;
  }

  public getSecondExpectedResult(): string {
    // RETURN EXPECTED SOLUTION FOR TEST 2;
    return 'day 1 solution 2';
  }
}
// A rock       X    => 1
// B paper      Y    => 2
// C scissors   Z    => 3
// lost              => 0
// draw              => 3
// win               => 6
