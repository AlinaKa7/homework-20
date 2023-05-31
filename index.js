function addSums(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(addSums(3)(5)(20));

///////////////////////////////////////////////////

function addNumber(x) {
    return function(y) {
        if (y) {
            return addNumber (x + y)
        } else {
            return x
        }
    }
}
let result1 = addNumber(3)(5)();
let result2 = addNumber(3)(5)(20)();
console.log(result1); 
console.log(result2); 