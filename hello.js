function mathCreator() {
    var math = {
        add: function(x, y) {
            return x + y;
        }
    }
    return math;
}

var math = mathCreator();
console.log(math.add(10, 20));

function arraySum(array) {
    var sum = 0;
    for (var i = 0 ; i < array.length ; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(arraySum([1, 2, 3]));
