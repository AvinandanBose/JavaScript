//Conversion to String
let myvar = 34;//Numbers
myvar = String(34);
console.log("myvar:"+myvar);
console.log("DataType of myvar:"+typeof(myvar));

let myvar_n = 34;
myvar_n = myvar_n.toString();
console.log("myvar_n:"+myvar_n);
console.log("Data Type of myvar_n:"+typeof(myvar_n));

//Conversion to Number
let stri = Number("1234");
console.log("stri:"+stri);
console.log("Data Type of stri:"+typeof(stri));

//Conversion to Int
stri = parseInt(stri);
console.log("Data Type of stri:"+typeof(stri));

//Conversion to float
stri = parseFloat(stri);
console.log("stri:"+stri);
console.log("Data Type of stri:"+typeof(stri));

let num = 123.44;
num = parseInt(num);
console.log("num:"+num);

num = parseFloat("123.445");
console.log("num:"+num);
console.log("num:"+num.toFixed(10));//will give 10 digits after decimal point

//Boolean Conversion
let bool = false;
bool = Number(bool);
console.log("Bool:"+bool);
bool = Number(true);
console.log("Bool:"+bool);


//Array to Number
let arr = [2,3,4,5];
console.log("Array[0]:"+arr[0]);
console.log("Array[1]:"+arr[1]);
console.log("Array[2]:"+arr[2]);
console.log("Array[3]:"+arr[3]);
console.log("Array:"+arr);
arr = Number([1,2,3,4,5]);//Number(arr) -> passing the variable
console.log("Array:"+arr);//will give NaN(Not a number output)
arr = parseInt([1,2,3,4,5]);
console.log("Array:"+arr);//Able to parse only the first value
//Similarly 
arr = parseInt(arr);
console.log("Array:"+arr);

arr = String([1,2,3,4,5]);
console.log("Array:"+arr);
console.log("Data Type:"+typeof arr);

 arr = [2,4,5];
 arr = String(arr);
 console.log("Array:"+arr);
 console.log("Data Type:"+typeof arr);

 arr = [5,6,7];
 arr = arr.toString();
 console.log("Array:"+arr);
 console.log("Data Type:"+typeof arr);