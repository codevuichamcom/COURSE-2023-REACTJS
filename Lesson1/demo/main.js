let numbers = [1, 2, 3, 4, 5, 6];

// numberMu2 = [1, 4, 9, 16, 25, 36];

// console.log(numbers.length);
// numbers.push(10);
// console.log(numbers);
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// console.log(numbers);

// numbers.unshift(0);

// console.log(numbers);

// numbers.shift();
// numbers.shift();

// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//for of, for in

// for (const item of numbers) {
//   console.log(item);
// }

// const person = {
//   id: 1,
//   name: "Quan",
//   age: 18,
//   children: {
//     name: "Con cua Quan",
//     age: -2,
//   },
// };
// // console.log(person);

// for (const k in person) {
//   console.log(person[k]);
// }

const courses = [
  {
    id: 1,
    name: "Java",
    price: 1,
  },
  {
    id: 2,
    name: "React",
    price: 0,
  },
  {
    id: 3,
    name: "Spring",
    price: 1,
  },
  {
    id: 4,
    name: "NodeJS",
    price: 0,
  },
  {
    id: 5,
    name: "Flutter",
    price: 2,
  },
];

// let isFree = true;
// courses.forEach((item, index) => {
//   if (item.price != 0) {
//     isFree = false;
//   }
// });

// let isFree = courses.every((course) => course.price === 0);

// let isExistFree = courses.some((course, index) => course.price === 0);

// let course = courses.find((course, index) => course.id === 10);

// let freeCourses = courses.filter((course, index) => course.price === 0);

// // console.log(freeCourses);

// // const numberMu2 = numbers.map((course, index) => {
// //   return <h1>Courasdhaksd</h1>;
// // });

// console.log(numberMu2);

// const vehicleOne = {
//   brand: "Ford",
//   model: "Mustang",
//   type: "car",
//   year: 2021,
//   color: "red",
// };

// // old way
// function myVehicle({ type, color, brand, model }) {
//   return "My " + type + " is a " + color + " " + brand + " " + model + ".";
// }

// console.log(myVehicle(vehicleOne));

// const person = {
//   name: "Jesse",
//   age: 30,
//   address: {
//     city: "Houston",
//     state: "Texas",
//     country: "USA",
//   },
// };

// const {
//   address: { state },
// } = person;
// console.log(state);

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];

// const numberCombine = [...numbersOne, ...numbersTwo];
// const numberNew = [10, ...numbersOne];
// console.log(numberNew);

// const myVehicle = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };

// const updateMyVehicle = {
//   type: "car",
//   year: 2021,
//   color: "yellow",
// };

// const newVehicle = {
//   ...myVehicle,
//   ...updateMyVehicle,
// };

// console.log(newVehicle);

// const so = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [first, second, third, ...num] = so;

// const myVehicle = {
//   brand: "Ford",
//   model: "Mustang",
//   color: "red",
// };
// const { brand, ...others } = myVehicle;
// console.log(others);
