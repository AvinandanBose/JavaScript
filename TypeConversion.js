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
