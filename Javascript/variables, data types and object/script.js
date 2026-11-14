console.log("Hey how are you");

var a =5;    //var is globally scoped
a=a+1;
var b =6;
var c ="utkarsh";
let d = true;
let f = null;

var _a="shubham";

console.log(a+b+2);

let e =15; //let is blocked scoped
console.log(e)
{
    let e =12;
    console.log(e);
}

let o ={
"name":"utkarsh singh",
"roll no":34,
status:"sigma boy"

}
console.log(typeof a ,typeof b , typeof c ,typeof d ,typeof f, typeof o);
console.log(o)
o.salary = "500cr"
console.log(o)

