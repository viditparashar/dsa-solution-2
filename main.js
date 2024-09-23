
//Find Length of a String

function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
}
getLength("Hello World");


//indexOf() to find the index of a particular character in a string

function findIndex(str, target) {
    console.log('Original String:', str);
    console.log("Index:", str.indexOf(target));

}

findIndex("Hello World", "W");

function findLastIndex(str, target) {
    console.log("Original String", str);
    console.log("Index", str.lastIndexOf(target));
}

findLastIndex("Hello World World", "World");

function getSlice(str, start, end) {
    console.log("Original String", str);
    console.log("Sliced", str.slice(start, end));
}

getSlice("Hello World", 0, 7 );

function replaceWord(str, target, replacement) {
    console.log("Original String", str);
    console.log("New String", str.replace(target, replacement));
}

replaceWord("Hello World", "World", "Striung");

function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);