let n = 600851475143;
let factor = 2;
let largest = null;

while (Math.pow(factor, 2) <= n) {

    if (n % factor === 0) {
        largest = factor;
        n /= factor;
    } else {
        factor++;
    }
}

if (n > largest) {
    largest = n;
}

console.log(largest);