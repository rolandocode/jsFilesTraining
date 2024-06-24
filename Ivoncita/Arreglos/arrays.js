var arreglo1 = [12, 14, 35, 14, 245, 12, 1345, 123, 35, 67, 223, 567, 32];
    //   0   1   2   3   4   5     6    7

// console.log(x[2]);
// console.log(x[4]);
// console.log(x[0] + x[1]);

// console.log(x[0] * 2);
// console.log(x[1] * 2);
// console.log(x[2] * 2);
// console.log(x[3] * 2);

arreglo1.push(232);
arreglo1.push(10);

// arreglo1.pop();
// arreglo1.slice(5,4)

for (var pocision = 0; pocision < arreglo1.length; pocision++){
    var index = pocision;
    console.log(arreglo1[index] * 2);
}

console.log("FOREACH METHOD!!!");


//ARROW FUNCTION, LAMBDA FUNCTION
arreglo1.forEach(arrIndex=> {
    console.log(arrIndex * 2)
});



