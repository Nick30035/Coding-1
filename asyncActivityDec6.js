function reverseWorld(word) {
    var originalStr = "word";
    var reversedStr = "";
    for ( i = 0; i < originalStr.length(); i++) {
      reversedStr = originalStr.charAt(i) + reversedStr;
    }
    console.log("Reversed string: "+ reversedStr);
}

reverseWorld('Nick')

const word="Banana"
const newWord = word.split("")
const reverseWorld = newWord.reverse()
console.log (reverseWord)

// Reverse the Array