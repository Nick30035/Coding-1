// What is a function?
'A function is a set of instructions that perform a speciifc task or job.'

// Functions come in 2 variations:
// built-in functions - these are instructions that are pre-written into the coding language
// all we need to do is pass data
// examples
var className= 'Coding class'
console.log(className)

// user-defined functions- custom functions written by engineers to make code that performs
// specific tasks

// How do we write a user-defined function?

// function exampleFunction(){
    console.log('the function script is connected')



// in order to have a function work, we need to call it the above,
// code is the function definition- MEANING it's only telling the computer the instructions
// not to actually run it

// we access or call a function by writing its name
//exampleFunction()

let accountBalance =1000;

function depositMoney(depositAmount){
let newBalance =accountBalance+depositAmount;
document.getElementById("data").innerHTML=newBalance;
}
function login(){
    console.log('depending on the data, you will or will not ')
    // if email is incorrect or doesn't
}
// Methods- Functions that contain other functions

// data that we want to manipulate goes inside of the round brackets.
// the instructions on what we want to do with the data
// goes insdie of the curly brackets