// let fruits = ["coconut", "orange", "cucumber", "apple"]
// let car = {
//     maker: ["Mecerdes", "Volvo", "Toyota"],
//     models: ["GLE 500", "XC90", "Prado"],
//     color: ["black", "blue", "wine"],
//     details: function(){
//         return 'I like ${this.color[0]} ${this.maker[1]} ${this.models[1]}'
//     }
// }
// console.log(car.details());

// Function

// let a = document.getElementById("text")
// console.log(a);
// a.style.color = "hotpink"
// a.style.fontSize = "70px"

// happy()
// happy()
// function happy() {
//     console.log("happy bietday tunji");
// }
// happy()

// let z = window.prompt("name")
// let y = window.prompt("name")
// let x = window.prompt("name")
// function abc(a) {
//     console.log('happy birthday ${z,y,x}');
// }
// abc(z)
// abc(y)
// abc(x)

// function product(x,y) {
//     const mult = x *y;
//     let a = x;
//     let b = y;
//     let c = x - y;
//     return a;
// }
// const result = product(5,4);
// console.log(result);

// const fourValues = (a, b, c, d) =>{
//     return a / b + c * Math.sqrt(d)
// }


//  let a = window.prompt("enter dollar: ")
//  let b = document.getElementById("naira")
// //  let d;
//  function convert() {
//    let d = a*1200
//     b.textContent = `Your equivalent Naria values is ${d}`
//  }
//  convert()
 
 
// let numSet = [23, 4, 53, 5,3,7,550, 78, 34]
// let unmSet = [23, 4, 53, 90, 2303, 5,3,7,550, 78,34]
// let sumAll = (arr)=>{
//    let resuit = arr,reduce((ass, val)=> acc + val
//    , 0)
//    return resuit
// }
// console.log(sumAll(numSet2));

// let accessLevel;
// accessLevel = 3;
// if (accessLevel == 2) {
//   console.log("Welcome, Level 2 User!");
// } else if (accessLevel ==3) {
//   console.log("Welcome, Level 3 User!");
// } else if (accessLevel ==4) {
//   console.log("Welcome, Level 4 User!");
// } else {
//   console.log("Unauthorised Access");
// }
// const names = ["Dayo", "Segun", "Kenny", "Toke", "Abdulquadri"]
// for (let index = 0; index < names.length; index++) {
// const students = names[index];
// console.log(students);
//   }
// for (let i = 0; i < names.length; i++) {
//   const students = names[i];
//   console.log(students);
// }

// const ikorodu = [50 , 60 , 70, 30 , 90, 250]
// const kosofe = [90 , 30 , 70, 50 , 250, 60]
// for (let a = 0; a < ikorodu.length; a++) {
//   const element = ikorodu[a];

//   for (let b = 0; b < kosofe.length; b++) {
//     if (element == kosofe[b]) {
//       // console.log(`Ikorodu Index ${a} found in kosofe Index ${b}`);
//       console.log(b);
//       break;
//     }
//   }
// }

// TIME AND MOMENT

// function tellTime(time){
//   let time = time.slice(0, -3);
//     result = (time < 12) ? "Good Morning":
//              (time >= 12) ? "Good Morning":
//              (time >= 16) ? "Good Evening": "enter right time"
//     return result
// }
// console.log(tellTime(160));
// 
// -5


// let x = window.prompt("Enter a value: ")
// x = Number(x)
// let color = x < 20 ? "Blue" : "Black"

// switch (color) {
//   case "Blue":
//     console.log("you have a blue color");
//     break;
//   case "Black":
//     console.log("You have the color black");
//   default:
//     console.log("no colors at all");
//     break;
// }
      // DATE AND TIME

// let targetDate = new Date("2024-01-20T00:00:00").getTime()  "17T13"

// let launch = setInterval(function () {
//   let currentDate = new Date().getTime()
//   let remainingTime = targetDate - currentDate

//   const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
//   const hours Math.floor(remainingTime % ((1000 * 60 * 60 
//     *24)) / (1000 * 60 *60))
//   const minuter = Math.floor(remainingTime % ((1000* 60 * 60)) / (1000 * 60))
//   const seconds = Math.floor(remainingTime % ((1000*60)) / 1000)

//   document.getElementById("timer")

// }
// )
//             JAVASCRIPT OBJECT AND CLASSES
// class Person {
//   static minimun_wage = 30000
//   constructor(name, age, email, address){
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.address = address;
//   }
//     status(){
//       return `I am ${this.name} at ${athis.ge}, here is my email: ${this.email}`
//     }
//     static greet(){
//       return `Hey I am good`

//     }
  
// }
// let person = new Person("Yusuf", 36, "talktome@text.com", "No 1 abdulrazaq omole")
// let person1 = new Person("kenny", 40, "yohey@hey.io", "oke-oko 10 agric ikorodu")
// console.log(person);
// console.log(person1);

// class Car {
//   numberOfCar = 0
//   constructor(model){
//     this.model = model
//     this.numberOfCar+=1

//   }
//   drive(){
//     console.log("i am currently driving");

//   }
// }
// let porsche = new Car("porsche")
// let ferarri = new Car("ferarri")
// let benz = new Car("benz") 
// let tesla = new Car("tesla")
// console.log(benz.numberOfCar);


// class Person {
//       name
//       gender = undefined
//       occupation
//       constructor(name, gender){
//             this.name = name
//             this.gender = gender
//             this.occupation = "unemployed"
//       }
// }

// let person1 = new Person("Yusuf", "Male")
// console.log(person1);

class Teacher extends Person{
      course
      dept
      status
      constructor(name, gender, course){
            super
            this.course = course
            this.name = name
            this.gender = gender
            this.occupation = "Employed"
            
      }
      
}

let Teacher1 = new Person()
// console.log(Teacher1);

class Student extends Person{
      constructor(name, gender, age, level){
            this.name = name
            this.gender = gender
            this.age = age
            this.level = level
            this.occupation = "student"
      }

      desc(){}
}
let student1 = new student1(14, 3, "B", "Aisha", "F")
console.log(student1.desc());