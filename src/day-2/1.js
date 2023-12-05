import {gameData} from './data/data.mjs';

const VALID_DICE = {
    red: 12,
    green: 13,
    blue: 14
};

function adventOfCodeDay2Part1() {
    let sum = 0;

    for(const row of gameData) {
        const [game, outcomesString] = row.split(':');
        const [_, gameId] = game.split(' ');
        const outcomes = outcomesString.split(';').map(outcome => outcome.trim().split(','));

        let isValid = outcomes.every(outcome => outcome.every(die => {
            const [amount, type] = die.trim().split(' ');
            return amount <= VALID_DICE[type];
        }));

        if (isValid) {
            sum += parseInt(gameId);
        }
    }

    return sum;
}

const answer = adventOfCodeDay2Part1();
console.log('answer: ', answer);
