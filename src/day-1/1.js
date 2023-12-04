import {calibrationDocument} from "./data.mjs";


function adventOfCodeDay1Part1() {
    let sum = 0;

    for (let line of calibrationDocument) {
        let firstDigitMatch = line.match(/\d/);
        let lastDigitMatch = line.match(/(\d)(?=\D*$)/);

        let firstDigit = firstDigitMatch ? firstDigitMatch[0] : null;
        let lastDigit = lastDigitMatch ? lastDigitMatch[0] : null;

        if (firstDigit !== null) {
            lastDigit = lastDigit || firstDigit;
            sum += Number(firstDigit + lastDigit);
        }
    }

    return sum;
}

const answer = adventOfCodeDay1Part1();
console.log('answer:', answer);
