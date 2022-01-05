var a = new Date();
console.log(a.getTime()/1000/60/60/24/365);
var d = new Date("1/1/1970 0:0:0");
time = d.getTime();
console.log(time);

var start = Date.now();
console.log(start);
for (var i = 0; i < 100 ; i++){
    console.log(i);
}
var end = Date.now();
console.log(end);
console.log(end - start);

var str = "hello,world";

var result = str.charAt(0);
console.log(result);

var result2 = str[0];
console.log(result2);

//["h","e","l","l","o"];

console.log(str.length);
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);






