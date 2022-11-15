// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
for (let index = 1; index < 21; index++) {
    if ( index % 2 == 1) {
        console.log(index);
    }
}

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
i=101
while (i>=0) {
    i--;
    if (i % 3 == 0) {
        console.log(i);
    }
}

// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
var array = [4, 2.5, 1, -0.5, -2, -3.5];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100.
// We should get back 5050 at the end.
var sum = 0;
var i = 0;
while (i<100) {
    i++;
    sum+=i;
}
console.log(sum);

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12.
// We should get back 479001600 at the end.
var fact = 1;
var i = 1;
while (i<13) {
    fact*=i;
    i++;
}
console.log(fact);