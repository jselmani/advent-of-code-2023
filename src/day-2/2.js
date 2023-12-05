import {gameData} from './data/data.mjs';

function adventOfCodeDay2Part2() {
    let totalPower = 0;

    for(const row of gameData) {
        const [game, outcomesString] = row.split(':');
        const outcomes = outcomesString.split(';');

        let minCubes = {red: 0, green: 0, blue: 0};

        for(const outcome of outcomes) {
            const dice = outcome.split(',')
                .map(die => die.trim().split(' ')
                    .map((value, index) => index === 0 ? parseInt(value) : value));

            let cubes = dice.reduce((acc, [amount, type]) => {
                acc[type] = (acc[type] || 0) + amount;
                return acc;
            }, {});

            for(const colour in cubes) {
                if(cubes[colour] > minCubes[colour]) {
                    minCubes[colour] = cubes[colour];
                }
            }
        }

        const power = minCubes.red * minCubes.green * minCubes.blue;
        totalPower += power;
    }

    return totalPower;
}

const answer = adventOfCodeDay2Part2();
console.log('answer: ', answer);