//print the numbers 1 to 10//

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("````````````````program end````````````````````")

//print the number 10 to 1//
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

console.log("````````````````program end````````````````````")

//Print numbers from 20 to 30
for (let i = 20; i <= 30; i++) {
    console.log(i)

}
console.log("````````````````program end````````````````````")

// Print numbers from 1 to 10 in reverse
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("````````````````program end````````````````````")

// Find sum of first 5 numbers
let sum = 10;
for (let i = 1; i <= 5; i++) {
    console.log(sum + i);
}
console.log("````````````````program end````````````````````")

//print odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("````````````````program end````````````````````")

// find sum of even numbers from 1 to 10
let sumeven = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        sumeven += i;
        console.log(sumeven);
    }
     
}
console.log("````````````````program end````````````````````")

//print 1 to 50 by skipping 10 multiples (it should not print 10,20,30,40 and 50)
for (let i = 1; i <= 50; i++) {
    if (i % 10 !== 0) {
        console.log(i);

    }
}

console.log("````````````````program end````````````````````")

//print the numbers 1 to 10 by using while loop//
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

console.log("````````````````program end````````````````````")
//print 1 to 50 by skipping 10 multiples (it should not print 10,20,30,40 and 50)

let a=1;
while(a <=50){
    if(a%10!==0)
    console.log(a);
    a++;
}
console.log("````````````````program end````````````````````")

// find sum of even numbers from 1 to 10 by using while loop

let c=1;                     // for(let i=1,i<=10,i++)
while(c<=10){                //if(i%2===0)
    if(c%2==0)
        console.log(c);
    c++;
}
 console.log("````````````````program end````````````````````")

//print odd numbers from 1 to 20    for(let a=1,a<10,a++)
// 
console.log("print odd numbers from 1 to 20 using while")                                 
let x=1;
while(x<=20){
    if(x % 2!==0)
        console.log(x);
    x++;
}