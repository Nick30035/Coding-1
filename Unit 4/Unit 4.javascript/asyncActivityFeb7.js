// For Loop - is a type of loop that iterates (counts over)
// a list or collection of data. For loops generally have 
// a starting point and ending point.


// While Loop  -  is a type of loop that will repeat a set of 
// instructions so long as a condition is true.


2.
// A Timer program is an example of a program that can
// be built using a while loop.


function timer(){
    var interval = 60 
    while (interval > 0){
        console.log('countdown:'+ interval)
        interval -=1 
    }
    console.log("Timer is done");
}

//timer();


3. 
// You have been hired by temple university to work on a graduation checker program. 
// your program should be able to 
// find the highest grade in a list. 
//Create a function that will loop through each number in the list and identify 
// if it is the highest number.
 //When your program finds the highest grade, 
//it should return a message telling the user what the highest grade is.


' Create loop that is checking for the highest grade.'

'loop, function , number/ integer, list'
' looking for highest grade'


'how many grades need to be checked'
'how many items  are in said list'

'I create a function'
'I need a loop to check a list of number (For Loop)'
'I need to compare the grades to check for the highest value'
'We need a list of numbers'
'I need to make a comparison between each number in the list'
'The loop will compare each number to the previous '

grades=[70,88,75,90,100,71]

function gradeChecker(){
    let i =0;
    for ( i ; i < grades.length; i+=1){
        console.log(grades[i])
    }
}

gradeChecker()