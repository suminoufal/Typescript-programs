let firstName:string='sumi';
console.log(firstName);
// Create a variable studentName of type string and print it. 
let studentName:string[]=['sumi','aaman','noufal'];
console.log(studentName);
//function(a,b)
function add(a:number,b:number):number{
return a+b;
}
console.log(add(2,4));
//Write a function printMessage(msg: string): void that prints the message.
function printmessage(msg:string):void{
    console.log(msg);
}
//Write a function fullName(first: string, last?: string) that returns the full name if last is
//given, otherwise only first
 function fullname(first:string,last?:string):string{
return last?first+' '+last:first;
 }
 console.log(fullname('sumi','aaman'));
 console.log(fullname('sumi'));
 //Write a function openUrl(url: string, browser: string = 'chrome') and call it with and
//without the browser.
function openurl(url:string,browser:string='chrome'){
    return `Opening ${url} in ${browser}`;   
}
console.log(openurl('www.google.com'));
//Write a function isEven(n: number): boolean that returns true if the number is even.
function isEven(n:number):boolean{
    return n%2==0
}
console.log(isEven(4));
console.log(isEven(5));