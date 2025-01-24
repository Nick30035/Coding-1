x = 2 // This is an example of a assignment operator - giving a variable value
while(x=2){
    console.log('This message will repeat forever')
}

function timer(){
    var interval = 60
    while (interval > 0){
        console.log('countdown' + interval)
        interval -=1
    }
    console.log("Times up!")
}

