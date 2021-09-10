/*Primitive dataTypes(Already defined by compiler,Immutable and cannot be altered)
1. String
2. Numbers
3. Boolean
4. Null
5. undefined
6. Symbol */

//String
let Myname = 'Avi' 
console.log("My Name is:" +Myname);
console.log("Data Type of " +Myname+ " is: " +typeof(Myname));

//Boolean
let isDriver = true;
console.log("Dirver is:" +isDriver);
console.log("Data Type of \"" +isDriver+ "\" is: " +typeof(isDriver));

//Numbers 
let marks = 12;
console.log("Marks  is:" +marks);
console.log("Data Type of \"" +marks+ "\" is: " +typeof(marks));

//Null -Though it is object (object via property) but a primitive data type
let nullVar = null;
console.log("Null Var  is:" +nullVar);
console.log("Data Type of \"" +nullVar+ "\" is: " +typeof(nullVar));

//undefined
let undef = undefined;
console.log("Null Var  is:" +undef);
console.log("Data Type of \"" +undef+ "\" is: " +typeof(undef));


/*Referenced dataTypes(variable stores an object and values reference to an object, 
    memory allocates in heap)
1. Arrays
2. Function 
3. Object
 */

let myarr = [12,13,14,'string',true];
console.log("Array  is:" +myarr);
console.log("Data Type of \"" +myarr+ "\" is: " +typeof(myarr));

//Object Literals
let stMarks = {
    Avi:89,
    Subham:93,
    Rohan:94
}
console.log("Student Marks are Avi:" +stMarks.Avi +", Subham:"+stMarks.Subham +",Rohan:"+stMarks.Rohan );
console.log("Data Type of \"" +stMarks+ "\" is: " +typeof stMarks); 

//function 

function funcname()
{ 

}
console.log("Data Type of funcname() is: " +typeof(funcname));

//creating object with new Keyword
let date = new Date;
console.log("Data Type of date is: " +typeof(date));