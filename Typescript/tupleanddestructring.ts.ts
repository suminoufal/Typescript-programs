//*****Tuple: a tuple is like an array with a fixed number of elements, where each element can have a different type. In TypeScript, you can define a tuple using square brackets and specifying the types of each element in order. For example:
 //let employee:[string, number, boolean] = ['John Doe', 30, true];
//In this example, the tuple employee has three elements: a string, a number, and a boolean. You can access the elements of the tuple using their index, just like an array. For example:

let employee:[string, number, boolean] = ['John Doe', 30, true];
 console.log(employee[0]); // Output: John Doe
 console.log(employee[1]); // Output: 30
 console.log(employee[2]); // Output: true

 //********************Update tuple*****************

 employee[0] = 'Jane Doe';
 console.log(employee[0]); // Output: Jane Doe

 //************namded tuple*****************

 let person:[name:string,age:number,isStudent:boolean] = ['John Doe', 30, true];
 console.log(person[0]);
 //functions using tuples
function getEmployee():[string, number, boolean]{
    return ['John Doe', 30, true];
}
let [name, age, isStudent] = getEmployee();
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(isStudent); // Output: true
console.log(``)

//**********function with return type as tuple***************

 type employeeDetails=[Name:string,Age:number] 
 function displayEmployeeDetails(emp:employeeDetails){
    console.log("Name:", emp[0]);
    console.log("Age:", emp[1]);
 }
 let output=displayEmployeeDetails(['John Doe', 30]);


 //*****destructuring : way of accessing some values from an array or object and assigning them to variables. 
// ************Without destructuring an array*****************

let student:string[]=["ravi","QA","city"];
let name1=student[0];
let department=student[1];
let city=student[2];
console.log(name1,department,city);// ravi QA city

//********By using destructuring*******************

let student1:string[]=["ravi","QA","city"];
let [name2,department1,city1]=student1;
console.log(name2);
console.log(department1);
console.log(city1);

//**********Array destructuring by using numbers**************
  let numbers:number[]=[10,20,30,40];
  let[n1,n2,n3,n4]=numbers;
  console.log(n1,n2,n3,n4);

  //*******Skipping array elements********** 
  let tools:string[]=["firefox", "google", "chrome"];
  let [frist, ,third]=tools;
  console.log(frist,third); //firefox chrome



