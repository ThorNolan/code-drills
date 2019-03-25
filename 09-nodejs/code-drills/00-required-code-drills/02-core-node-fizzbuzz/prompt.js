
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================

    var numArray = []
    for (var i = n; i > 0; i--) {
        numArray.push(i);
    }
    numArray.reverse();

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 3 === 0 && numArray[i] % 5 === 0) {
            console.log("fizzbuzz")
        } else if (numArray[i] % 5 === 0) {
            console.log("buzz")
        } else if (numArray[i] % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(numArray[i])
        }
    }
// ==========================================================
  
}

fizzBuzz(process.argv[2])

