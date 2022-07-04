// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// I predict the random cars will print (cars) While otherRandomCars will bring up an error cause theis a coma in from of the const variable name

//I was wrong, it printed Telsa and Mercedes

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Telse'
// }
// const {name: otherName} = employee;

// console.log(name);
// console.log(otherName);

//I predict the first console will give and error and the second will give "otherName"
//I was right on the first one but wrong on the second, otherName gave me Elon


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;

// console.log(password);
// console.log(hashedPassword);

//I belive hashedPassword will autogenerte a password so the first console will give the "12345" and then the other will be a bunch of charecters
//Right on the first and second it gave undefined.

// const numbers = [8, 2 , 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;

// console.log(first == second);
// console.log(first == third);

//It will either be an error or it will give us the 2nd and 3rd numbers (3, 5 - starts at index of 0)
//Was wrong yet again, it was checking the numbers to see if they are the same so it returned false and true


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
