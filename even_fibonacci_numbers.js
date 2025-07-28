let x = 1;
let y = 2;
let sum = 0;

while (y <= 4000000) {
    
    if (y % 2 === 0) {
        sum += y;
    }

    let temp = x + y;

    x = y;
    y = temp;
}

console.log(sum);