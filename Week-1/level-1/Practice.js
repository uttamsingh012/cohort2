function getLength(str) {
    console.log("original string", str);
    console.log("lenght ", str.length);
}
getLength("hello world");      

// index of
function idx(str, target) {
    console.log("original str ", str, target);
    console.log("idx ", str.indexOf(target));
    console.log("idx ", str.lastIndexOf(target));
}
idx("hello world world", "world");

// slice of
function sliceof(str,start,end) {
    console.log(str.slice(start,end));
}
sliceof("uttam", 2,3); 

let val = "uttam singh";
let ans =  val.substr(2,3);
console.log(ans);

// replaceString

const str = "hello world";
console.log(str.replace("world", "javascript"));

// splitString
const value= "hi, my, name, is, uttam singh";
const wo = value.split(",");
console.log(wo);

// trim
const value1 = "   uttam  "
console.log(value1.trim())

 