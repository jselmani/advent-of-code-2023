import {calibrationDocument} from "./data/data.mjs";

function adventOfCodeDay1Part2() {
    let sum = 0;
    const numberMap = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };

    for (let line of calibrationDocument) {
        let firstDigitMatch = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/);
        let lastDigitMatch = null;
        for (let i = line.length - 1; i >= 0; i--) {
            let potentialMatch = line.substring(i).match(/\d|one|two|three|four|five|six|seven|eight|nine/);
            if (potentialMatch) {
                lastDigitMatch = potentialMatch;
                break;
            }
        }

        let firstDigit = firstDigitMatch ? (firstDigitMatch[0].length > 1 ? numberMap[firstDigitMatch[0]] : firstDigitMatch[0]) : null;
        let lastDigit = lastDigitMatch ? (lastDigitMatch[0].length > 1 ? numberMap[lastDigitMatch[0]] : lastDigitMatch[0]) : null;

        if (firstDigit !== null) {
            lastDigit = lastDigit || firstDigit;
            sum += Number(firstDigit + lastDigit);
        }
    }

    return sum;
}

const answer = adventOfCodeDay1Part2();
console.log('answer:', answer);
