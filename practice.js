// Print numbers from 20 to 30 
//  Print numbers from 1 to 10 in reverse (example - 10 9 8..)
//  Find sum of first 5 numbers 
//  print odd numbers from 1 to 20
//  find sum of even numbers from 1 to 10
//  print 1 to 50 by skipping 10 multiples (it should not print 10,20,30,40 and 50)
// for(let i=20;i<=30;i++){
//   console.log(i);
// }
//  let i=20;
//  while(i<=30){
//   console.log(i);
//   i++;
//  }

//  console.log("********************************");

//  for(let i=10;i>=1;i--){
//   console.log(i)
//  }

//  console.log("**********************")
//   let a =10;
//   while(a>=1){
//     console.log(a);
//     a--;
//    
// let num=10;
// for(i=1;i<=5;i++){
//   console.log( i);
// }

//  for(let i=1;i<=20;i++){
//   if(i % 2 !==0)
//   console.log(i);
//  }

//   for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// /
// //print 1 to 50 by skipping 10 multiples
// for(let i=1;i<=50;i++){
//   if( i % 10!==0){
//     console.log(i);
//   }
// }

// let i=1;
// while(i<=50){
//   if(i % 10!==0){
   
//     console.log(i)
//   }
//   i++;
// }
// let sumeven=0;
// for(let i=1;i<=8;i++){
//   if(i % 2==0){
//     sumeven= + i;
//     console.log(sumeven)
//   }
// }

let sumeven=0;
let i=1;
while(i<=5){
  if(i % 2==0){
    sumeven+= i;
    console.log(sumeven);
  }
  
  i++;
}
