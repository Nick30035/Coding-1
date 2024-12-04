    // Anatomy of a function

    // curly brackets = this is called a parameter. 
    // we pass data inside of the functions parameters


    //  parameters = placeholder for data

    // data = just means data types

function pizzaParty(name, topping){


console.log('congrats'+name + 'you have been invited to the pizza party' );
console.log("Your custom pizza will have " + topping + "on it");
}

pizzaParty('Nick','pepperoni')


    // Conditional Statemenst in JS

    // Condtional statements are written using 
    // the 'IF' and 'ELSE' keywords. This allows
    // used to make a decisions based on data
    // our function receives.

    function pizzaPartyInvitation(name){
        let guest = 'Nick';
        if(name!=guest){
            console.log("this name is not on the list");
        } else {
            console.log("welcome to the party");
        }
    }
pizzaPartyInvitation('Nick')


function hourToMinutes(hour,minutes){
    console.log(hour* 60 +'minutes')
}

hourToMinutes(2)


// Conditional Statements
// If/Else keywords used create specific 
// outcomes based on the data the function receives.

function timeManagementSystem(hoursWorked){
if(hoursWorked <8){
    console.log("Unfortunately you will not get full time pay")
} else if (hoursWorked >8){
    console.log("You will be paid overtime");
} else if (hoursWorked >16 ) {
    console.log("You are working way too hard");
} else 
    console.log("You will get paid full time for the day.");{

    }

}

timeManagementSystem(10)

