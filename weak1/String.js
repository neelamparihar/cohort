function getLength(str) {
  console.log(str);
  console.log(str.length);
}
getLength("hello world world world");

function getIndex(str1, target) {
  console.log(str1.indexOf(target));
  console.log(str1.lastIndexOf(target));
}
getIndex("hello world hello neelam", "hello");

function getSubstring(str2, s, e) {
  console.log(str2.slice(s, e));
  console.log(str2.substr(s, e));
}
getSubstring("Hello Neelam", 2, 7);

function getReplacedString(str3, s1, e1) {
  console.log(str3.replace(s1, e1));
}
getReplacedString("Hello World", "World", "JavaScript");

function splitString(str4) {
  console.log(str4.split(","));
}
splitString("hello,my,name,is,Neelam Parihar");

const name = "      Neelam     Parihar         ";
console.log(name.trim());
console.log(name.toUpperCase());
console.log(name.toLowerCase());
