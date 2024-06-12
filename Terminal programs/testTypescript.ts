interface INumbers {

    x : number;
    y : number;
}

var numbers = <INumbers>{};

numbers.x = 10;
numbers.y = 20;
var result = numbers.x+numbers.y;
console.log("Hello from typescript, sum is " + result);