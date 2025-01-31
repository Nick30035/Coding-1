function calculate(numberA, arithmeticOperator, numberB){
    if(arithmeticOperator=="+"){
        console.log('we are doing addition')
        var result = numberA +numberB;
        console.log(result)
    }         else if (arithmeticOperator=="-"){
        console.log("we are doing subtraction");
        var result= numberA - numberB;
        console.log(result)
    }
    else{
        console.log('something went wrong')
    }
}

calculate(10,"+",20)