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




