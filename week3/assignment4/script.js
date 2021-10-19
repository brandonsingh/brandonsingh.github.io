
// Assignment 4 Part A
console.log(`PART A:`);

const LUCAS_WEIGHT = 78; //in kg
const LUCAS_HEIGHT = 1.69; //in m
const  JOHN_WEIGHT = 92; //in kg
const JOHN_HEIGHT = 1.95; //in m

let bmi = (weight, height) => {
    let calc = Math.round(weight/(height**2));
    return calc;
}

if (bmi(LUCAS_WEIGHT,LUCAS_HEIGHT) > bmi(JOHN_WEIGHT,JOHN_HEIGHT)) {
    console.log(`The BMi of John is ${bmi(JOHN_WEIGHT,JOHN_HEIGHT)}`);
    console.log(`The BMi of Lucas is ${bmi(LUCAS_WEIGHT,LUCAS_HEIGHT)}`);
    console.log(`Lucas' BMI is higher than John's BMI`);
} else {
    console.log(`The BMi of John is ${bmi(JOHN_WEIGHT,JOHN_HEIGHT)}`);
    console.log(`The BMi of Lucas is ${bmi(LUCAS_WEIGHT,LUCAS_HEIGHT)}`);
    console.log(`John's BMI is higher than Lucas' BMI`);
}

console.log(null);
// Assignment 4 Part B
console.log(`PART B:`);

const cels = 21;
const fahr = 70;

function celsToFahr(degCels) {
    let converted = Math.round((degCels*1.8) + 32);
    return converted;
}
function fahrToCels(degFahr) {
    let converted = Math.round((degFahr-32) * (5/9));
    return converted;
}
// &deg;F, &deg;C = degree symbol in html
console.log(`${fahr} degrees Fahrenheit to ${fahrToCels(fahr)} degrees Celsius`);
console.log(`${cels} degrees Celsius to ${celsToFahr(cels)} degrees Fahrenheit`);

console.log(null);
// Assignment 4 Part C
console.log(`PART C:`);

if (bmi(LUCAS_WEIGHT,LUCAS_HEIGHT) == bmi(JOHN_WEIGHT,JOHN_HEIGHT)) {
    console.log(`Lucas' BMI and John's BMI are equal at ${bmi(LUCAS_WEIGHT,LUCAS_HEIGHT)}`);
} else if (bmi(LUCAS_WEIGHT,LUCAS_HEIGHT) > bmi(JOHN_WEIGHT,JOHN_HEIGHT)) {
    console.log(`Lucas' BMI of ${bmi(LUCAS_WEIGHT,LUCAS_HEIGHT)} is higher than John's BMI of ${bmi(JOHN_WEIGHT,JOHN_HEIGHT)}`);
} else {
    console.log(`John's BMI of ${bmi(JOHN_WEIGHT,JOHN_HEIGHT)} is higher than Lucas' BMI of ${bmi(LUCAS_WEIGHT,LUCAS_HEIGHT)}`);
}
console.log(null);
console.log(`unsure of what I am supposed to do with the data sets provided`);

const netsScore1 = [97, 112, 101];
const knicksScore1 = [109, 95, 123];

const netsScore2 = [97, 112, 101];
const knicksScore2 = [109, 95, 106];

let arrTotal = (arr) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function whoWon(arr1, arr2) {
    if (arrTotal(arr1) > arrTotal(arr2)) {
        console.log(`The Nets had the higher score in set 1 with ${arrTotal(arr1)} points`);
    } else if (arrTotal(arr1) < arrTotal(arr2)) {
        console.log(`The Knicks had the higher score in set 1 with ${arrTotal(arr2)} points`);
    } else {
        console.log(`In set 2 the Knicks and Nets tied! Each scoring ${arrTotal(arr1)} points`);
    }
}

whoWon(netsScore1,knicksScore1);
whoWon(netsScore2,knicksScore2);

// if (arrTotal(netsScore1) > arrTotal(knicksScore1)) {
//     console.log(`The Nets had the higher score in set 1 with ${arrTotal(netsScore1)} points`);
// } else if (arrTotal(netsScore1) < arrTotal(knicksScore1)) {
//     console.log(`The Knicks had the higher score in set 1 with ${arrTotal(knicksScore1)} points`);
// }

// if (arrTotal(netsScore2) > arrTotal(knicksScore2)) {
//     console.log(`The Nets had the higher score in set 1 with ${arrTotal(netsScore2)} points`);
// } else if (arrTotal(netsScore2) < arrTotal(knicksScore2)) {
//     console.log(`The Knicks had the higher score in set 1 with ${arrTotal(knicksScore2)} points`);
// } else {
//     console.log(`In set 2 the Knicks and Nets tied! Each scoring ${arrTotal(knicksScore2)} points`);
// }

