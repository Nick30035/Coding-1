// JavaScript Lists are called Arrays


// They are more flexible compared to other programming
// language list data types


// In python/ Java they have List, Dict, Set, Tuple
// which are all under the Array family/ BUT these list
// data types all have a special job or function. where as
// in JS its universal


// JS Array is a data type for collecting and storing 
// other data types, including other lists.

var name="Nick";
var grocery=['apple,milk,water'];


// An array can store multiple data types
var generalList=[name1,grocery, 142415,true];

//Array Methods
// A method is a function that works on a list (or object).
// How we write methods
// methods are written after the list / variable name and 
// declared with a period
// basically you're going inside the list and running 
// instructions on data from the list
console.log()
console.error()


// Push method() - this method (special function)
// adds a new piece of data to a list. It will add that
// new data to the back of the list
generalList.push()
console.log(generalList)

// Pop method() - This method removes a piece of data 
// from a list. Will remove the last item in that list.

generalList.pop()
console.log(generalList)

// Length() method - This method counts the number of data 
// inside of a list
console.log(generalList.length)


// Arrays- a special data type for collecting
// and storing data inside of a variable.

// we declare an array by giving it a 
// variable name, and then assigning it the
// square brackets

var numbers = [1,2,3,34,435,5566]
var randomData = [true, 'name',numbers];


//What is a method?
// A method is a special type of function 
// that works on lists (....and objects)

// push() - this special function pushes new
// data into a array.
// PUSH needs an agrument passed into the array


var snowGear = ['gloves, hats, mittens, coats']
snowGear.push('snowboard')
console.log('snowboard')

// pop () - this is a special function for removing
// an item from an array.
// POP does not need an agrument. It will always
// remove the last item in the array
snowGear.pop()
console.log(snowGear)

// LIFO= last in, first out

// length - counts the data items in the array
// length does not take any arguments
console.log(snowGear.length)

snowGear.splice(1,1,'')
console.log(snowGear)


splice()


