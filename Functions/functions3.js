// 1

function insertString(someString, toInsert, index=1) {

    var newString = "";

    for(var i=0;i<someString.length; i++) {
        if(i === index) {
            newString +=" " + toInsert + " ";
        }
        
        newString += someString[i];
    }


    return newString;
}


console.log(insertString("Mojj string", "JS", 5))





























// 10

function checkArray(array) {
    var tmp = 0;
    var currentMax = 0;
    for (var i = 0; i < array.length; i++) {
      tmp = 0;
      for (var j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          tmp++;
        }
      }
  
      if (tmp > currentMax) {
        currentMax = tmp;
      }
    }
  
    return currentMax;
  }
  
  console.log(checkArray([3, "a", "a", "a", 2, 3, "a", "a", 3, "a", 2, 4, 9, 3]));
  