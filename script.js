const userInput1 = +prompt("number 1")
const userInput2 = +prompt("number 2")


// function isPositive(number){
// //черный ящик
    
    
//     if (number > 0){
//         return "Положительное"
//     }
//     else if(number < 0){
//         return "отрицательное"
//     }
//     else if(number === 0){
//         return "0"
//     }
//     else{
//         return "введено не коректное значение"
//     }
// }

// function isValidAge(age){
//     if(age <= 120 && age >=0){
//         return "возрас т коррект"
//     }
//     return "вщзраст не корр"
// }

// function getModule(number){
//     if(number >= 0){
//         return number
//     }
//     if(number<0){
//         return -number
//     }
//     else{
//         return "некоректный ввод"
//     }
// }

// function getGreater(num1, num2){
//     return num1 >= num2 ? num1:num2
// }

// function isKratno5(number){
//     // return number % 5 ? "не кратно" : "кратно"
//     if( number %5 !=0){
//         return "не кратно"
//     }
//     else if (number === 0){
//         return "кратон"
//     }
// }

// function isEarth(planet){
//     if(planet !== 'земля'){
//         return "привет инопланетянин"
//     }
//     if else(planet === 'земля'){
//         return "привет землянин"
//     }
// }

// function pow(num,p){
//     let result = num;
//     while(p){
//         p--
//         result = result * num
//     }
// }

// function calculate(num1,num2,operator){
//     switch (operator){
//         case '+':
//             return num1 + num2
//         case '-':
//             return num1 - num2
//         case '*':
//             return num1 * num2
//         case '/':
//             return num1 / num2
//         default: 
//         "будьте внимательнее"
//     }

// }

// function mod(num1,num2){
//     if(num1 < num2 ){
//         return num1
//     }
//     else if(num1===num2){
//         return 0
//     }
//     else{
//         let result = num2
//         while (result < num1){
//             result += num2
//         }
//         return num1 -(result - num2)
//     }
// }
alert(mod(userInput1,userInput2,))