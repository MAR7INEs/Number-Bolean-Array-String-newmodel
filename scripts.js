//number
//1
var my_Age=19;
console.log(my_Age);
console.log(typeof my_Age);
//2
var x=100+50;
console.log(x);
console.log(typeof x);
//3
var a=2/0;
console.log(a);
console.log(typeof a);
//4
var  b=900719925124740998;
//جمع ۲عدد صحیح بزرگ 
var b1=b+1;
console.log(b1);
console.log(typeof b1);
//5
var decimal=0.1+0.2;
console.log(decimal);
console.log(typeof decimal);
//6
var o=0.2+0.3;
console.log(o.toFixed(2));
console.log(typeof o);
//این روش تا دو رقم اعشار گرد میکند
//7
var y=9999999999999999
console.log(y);
console.log(typeof y);
//8
var Q='4'-2;
console.log(Q);
console.log(typeof Q);
//9
var P='4'/2;
console.log(P);
console.log(typeof P);

var P='4'*2;
console.log(P);
console.log(typeof P);
//در جمع فقط عدد دوم نوشته میشه ولی در ضرب و تقسیم پوتیشن دیگر حساب نمیشود
//10
var u=5-"hello";
console.log(u);
console.log(typeof u);
//اگر حرف با عدد بیادش میشه Not a number

//======================================================================================
//boolean
//1
var isSingle=true;
console.log(isSingle); 
console.log(typeof isSingle);
//2
var isOdd=false;
console.log(isOdd);
console.log(typeof isOdd);
//3
var a=5;
var b=5;
if(a==b){
    console.log("yeah it right")
}
//4
var a = 6;
var b = 5;

if ( a == b ){
 document.write("آره برابره");
} else if ( a > b ){
 document.write("آره متغیر a از b بزرگتره");
} else{
 document.write("متغیرها باهم مساوی نیستن");
 document.write("<br>");
 document.write("متغیر a بزرگتر از متغیر b نیست");
}
//5
var a = 2;
// بخش اول شرط
if ( a==5 ) {
 document.write("آره 5 هس");
}
// بخش دوم شرط
// زمانی این بخش بررسی میشه که بخش اول غلط باشه
else if ( a > 3 ) {
 document.write("5 نیست ولی بزرگتر از 3 هست");
}
// بخش سوم شرط
// زمانی این بخش بررسی میشه که بخش اول و بخش دوم هردو غلط باشند
else {
 document.write("متاسفانه مقدار متغیر a نه برابر با 5 هست و نه بزرگتر از 3");
}
//6
var a=true;
var b=false;
var c=undefined;
var d=null;
if (a){
  console.log("a is true");
}else{
  console.log("a is false")
} 
//7
// x is a boolean
var x = false;

// y is an object
var y = new Boolean(false);

document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;
//8
var x = false;         // x is a boolean
var y = new Boolean(false);  // y is an object
document.getElementById("demo").innerHTML = (x==y);
//9
var x = new Boolean(false);
var y = new Boolean(false);
document.getElementById("demo").innerHTML = (x==y);
//10
var x = new Boolean(false);
var y = new Boolean(false);
document.getElementById("demo").innerHTML = (x===y);
//Booleans and Boolean objects cannot be safely compared.
//======================================================================================

//string
//1
var city="تهران";
console.log(city);
console.log(typeof city);
//2
var fname="ARTIN";
console.log(fname);
console.log(typeof fname);
//3
var name="James";
var message=`Hi,Im ${name}.`;
console.log(message);
console.log(typeof message);
//i need ask this from my teacher*****************
//4
var name="James";
var str="Hello"+name;
console.log(str);
console.log(typeof str);
//5
var className="btn";
className +="btn-primary";
className +="none";
console.log(className);
console.log(typeof className);
//وقتی بخوایم دوتا رشته رو با هم جمع کنیم
//6
var mytext="Hi how are you?Im Artin.";
console.log(mytext);
console.log(typeof mytext);
//7
var Flower="Blue flower"
console.log(Flower);
console.log(typeof Flower);
//8
var truck="Black hornet"
console.log(truck);
console.log(typeof truck);
//9
var name="ARTIN";
var str="Goodbye"+name;
//name بخاطر اون+ خوانده نمیشه
console.log(str);
console.log(typeof str);
//10
var mytext="Hi im ARTIN?Tell me your name.";
console.log(mytext);
console.log(typeof mytext);
//======================================================================================

//Array
//1
var cities=["tehran","qazin","karaj"];
console.log(cities);
console.log(typeof cities);
console.log(cities[2])
//2
var students=["Mike","Jack","Ellie","Marry"];
console.log(students);
console.log(typeof students);
console.log(students[0])
//3
var Daneshjo=["Mike","Jack","Ellie","Marry"];
Daneshjo.push("Gorge");
console.log(Daneshjo);
console.log(typeof Daneshjo);
//for updating
//4
var Friends=["Mike","Jack","Ellie","Marry"];
//Updating our array
Friends[0]="ARTIN";
console.log(Friends);
console.log(typeof Friends);
//5
var Classmates=["Mike","Jack","Ellie","Marry"];
var Result=Classmates[Classmates.length-1];
console.log(Classmates);
console.log(typeof Classmates);
//6
var Provinces=["tehran","qazin","karaj","Mazandaran"];
delete Provinces[0];
delete Provinces[2];
console.log(Provinces);
console.log(typeof Provinces);
//7
var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{  
  var cars = ["Toyota", "Volvo", "BMW"]; 
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
console.log("demo").innerHTML = cars[0];
//دومی رو قبول میکنه
//8
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

console.log("demo").innerHTML = numbers2;
console.log(typeof number2)
function myFunction(value) {
  return value * 2;
}
//9
var myArr = [1, 2, 3, 4, 5,6];
var newArr = myArr.flatMap((x) => x * 2);
console.log("demo").innerHTML = newArr;
console.log(typeof newArr)
//10
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

console.log("demo").innerHTML = over18;
console.log(typeof over18)

function myFunction(value, index, array) {
  return value > 18;
}