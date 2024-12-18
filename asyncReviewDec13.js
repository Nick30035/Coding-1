// KEY POINTS

3.
// Create a function that will apply a discount to an item's price.
// based on their membership tier
// -superShopper = 10% discount on their items
// -megaShopper = 15% discount on their items
// ultraShopper = 20% discount on their items

// program needs to congratulate shoppers for saving money using their discount
// need item name, price and membership tier

function   membershipDiscount(){
    console.log('function is working');
    if (member== 'superShopper'){
        console.log("you are a superShopper. You get 10 percent off");
    } else if(member== 'megaShopper'){
        console.log("you are a megaShopper. You get 15 percent off");
    } else if( member== 'ultraShopper'){
        console.log('you are a ultraShopper. You get 20 percent off');
    }
}
membershipDiscount();