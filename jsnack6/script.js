/*
6 - Genera un array di 50 numeri random. Nell’array non devono esserci doppioni.
*/

// initialize an empty array
const randomNumbers = [];

// pushes the first random number into the array
let firstRandomNum = Math.floor(Math.random() * 100);

randomNumbers.push(firstRandomNum);

// loop to generate 50 random numbers
while (randomNumbers.length < 50) {

    // generates a random number
    const secondRandomNum = Math.floor(Math.random() * 100);
    
    // flagging variable
    let isDifferent = true;

    // checks if any of the numbers in the array is the same as secondRandomNum
    for (let i = 0; i < randomNumbers.length; i++) {
        if (secondRandomNum === randomNumbers[i]) {
            isDifferent = false;
        }
    }

    // pushes secondRandomNum into the array
    if (isDifferent) {
        randomNumbers.push(secondRandomNum);
    }

}

console.log(randomNumbers);

// code to check the result
const check = randomNumbers.reduce((acc, curr) => {
    if (acc.length == 0 || !acc.includes(curr)) {
        acc.push(curr);
    }

    return acc;
}, []);

console.log(check);

// PS: con reduce() sarebbe stato tutto molto più semplice :D